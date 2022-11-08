window.onload = init;
var cookieName = "cookiePrueba";
var cookieVar;


function init() {
    var value = parseInt(count(cookieName) + 1);
    console.log(value + " valueCookie");
    // * Creamos los eventos que pondran en mayúsuclas el nombre y apellidos al perder el focus
    nombre.addEventListener("blur", capitalize);
    apellidos.addEventListener("blur", capitalize);
    // * Validamos los datos al darle a enviar
    enviar.addEventListener("click", validate);
    // * Iniciamos una nueva cookie
    cookieVar = new cookie(cookieName, value, 5);
    // * Reseteamos la cookie
    cookieVar.deleteCookie(cookieName);
}

function cookie(name, value, days) {
    this.name = name;
    this.value = value;
    this.days = parseInt(days);
    this.deleteCookie = deleteCookie;
    this.count = count;
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

    document.getElementById("intentos").innerHTML = "Intentos de envío del formulario: " + value;

    if (validateNameSurname(this)) {
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
            document.getElementById("errores").innerHTML = "ERROR: " + form.elements[i].name.toUpperCase() + " no puede estar vacío";
            return false;
        }
    }
    return true;
}
// * Contamos cuantas veces se ha usado la cookie
function count(name) {
    // * Guardamos el nombre de la cookie
    var nameI = name;
    // * Spliteamos la cookie para guardar los diferentes valores por separador y acceder mas facilmente a ellos
    var source = document.cookie.split(";");
    console.log(source);

    for (let i = 0; i < source.length; i++) {
        var auxSource = source[i] + "=";
        // * Limpiamos la cadena de posible espacios en blanco
        while (auxSource.charAt(0) == " ") {
            auxSource = auxSource.substring(1, auxSource.length);
        }
        // * Comprobamos que el nombre pasado como parámetro esté contenido en la cookie
        if (auxSource.indexOf(nameI) == 0) {
            return 0;
        }
    }
}