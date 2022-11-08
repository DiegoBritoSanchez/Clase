window.onload = init;
var cookieName = "cookiePrueba";
var cookieVar;
var value;

function init() {
    // * Iniciamos el contador para la cookie
    value = 0;
    // * Creamos los eventos que pondran en mayúsuclas el nombre y apellidos al perder el focus
    nombre.addEventListener("blur", capitalize);
    apellidos.addEventListener("blur", capitalize);
    // * Validamos los datos al darle a enviar
    enviar.addEventListener("click", validate);
    // * Iniciamos una nueva cookie
    cookieVar = new cookie(cookieName, 5, 5);
    // * Reseteamos la cookie
    cookieVar.deleteCookie(cookieName);
}

function cookie(name, value, days) {
    this.name = name;
    this.value = value;
    this.days = parseInt(days);
    this.deleteCookie = deleteCookie;
    var expires;

    // * Si le indicamos una duración en días:
    if (isNaN(days)) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        // * Si no se le pasan una duración es porque queremos que se borre al cerrar la web
        expires = "";
    }
    // * Creamos la cookie
    document.cookie = name + "=" + value + expires + "; path=/";
    // * Borramos la cookie
    function deleteCookie(name) {
        cookie(name, "", -1);
    }
}

//Funcion para poner en mayúsculas los textos de los input de nombre y apellidos
function capitalize() {
    nombre.value = nombre.value.toUpperCase();
    apellidos.value = apellidos.value.toUpperCase();
}

//Validamos todos los datos del formulario
function validate(opt) {
    value++;
    document.getElementById("intentos").innerHTML = "Intentos de envío del formulario: " + value;
    if (validateNameSurname(this) && validateAge() && validatePhone() && validateEmail()) {
        return true;
    } else {
        opt.preventDefault();
        return false;
    }
}

//Funcion para validar los campos de nombre y apellidos
function validateNameSurname(object) {
    // * Pasamos el bóton de enviar como un objeto
    var form = object.form;
    // * Recorremos todos los elementos que forman el formulario buscando los que sean de tipo texto para validarlos
    for (var i = 0; i < form.elements.length; i++) {
        // * Reseteamos el tipo de clase que pudiera tener el elemento
        form.elements[i].className = "";
        if (form.elements[i].type == "text" && form.elements[i].value == "") {
            form.elements[i].className = "error";
            form.elements[i].focus();
            document.getElementById("errores").innerHTML = "Error: " + form.elements[i].name.toUpperCase() + " no puede estar vacío";
            return false;
        }
    }
    return true;
}
// Validar la edad
function validateAge() {
    if (isNaN(edad.value) || edad.value < 0 || edad.value > 105) {
        console.log(edad.value);
        errores.innerHTML = "La edad debe estar entre 0 y 105";
        edad.className = "error";
        edad.focus();
        return false;
    }
    // Si llega aquí es que la edad es correcta
    edad.className = "";
    return true;
}
// Validar telefono
function validatePhone() {
    var pattern = /^[679]\d{8}$/;

    if (!pattern.test(telefono.value)) {
        errores.innerHTML = "Sólo teléfonos que comiencen por 6 ó 9";
        telefono.className = "error";
        telefono.focus();
        return false;
    }

    telefono.className = "";
    return true;
}
//Validar mail
function validateEmail() {
    var pattern = /^[\w-\.]{2,}@([\w-]{2,}\.)+([\w-]{2,4})$/;
    if (!pattern.test(email.value)) {
        errores.innerHTML = "ERROR: No es un email válido.";
        email.focus();
        email.className = "error";
        return false;
    }
    email.className = "";
    return true;
}
//Validar nif
function validateNif(){
	var patron = /^\d{8}-[A-Z]$/;
	if (!patron.test(nif.value)){
		errores.innerHTML="ERROR: No es un número de NIF válido.";
		nif.focus();
		nif.className="error";	
		return false;
	}
	nif.className="";	
	return true;
}