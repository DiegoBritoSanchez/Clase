window.onload = init;

function init() {
    //Creamos los eventos que pondran en mayúsuclas el nombre y apellidos al perder el focus
    nombre.addEventListener("blur", capitalize);
    apellidos.addEventListener("blur", capitalize);
    //Validamos los datos al darle a enviar
    enviar.addEventListener("click", validate);
}

//Funcion para poner en mayúsculas los textos de los input de nombre y apellidos
function capitalize() {
    nombre.value = nombre.value.toUpperCase();
    apellidos.value = apellidos.value.toUpperCase();
}

//Validamos todos los datos del formulario
function validate(opt) {
    if (validateNameSurname(this)) {
        console.log("wer");
        return true;
    } else {
        console.log("sad");
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