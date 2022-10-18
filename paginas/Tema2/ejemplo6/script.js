//Primera parte
function newWindow() {
    miVentana = window.open('popUpWindow.html', 'ejercicio', 'menubar=false, toolbar=false, location=false, directories=false, resizable=false, top=20, left=20');
    miVentana.focus();
}

function content() {
    document.getElementById("title").innerHTML = "Ejemplo de Ventana Nueva";
    let table = document.getElementById("information");
    table.innerHTML += "<tr><th colspan='2'>Información de utilidad</th></tr>";
    table.innerHTML += "<tr><td>URL:</td><td>" + location.href + "</td></tr>";
    table.innerHTML += "<tr><td>Protocolo utilizado:</td><td>" + location.protocol + "</td></tr>";
    table.innerHTML += "<tr><td>Nombre navegador:</td><td>" + navigator.appCodeName + "</td></tr>";
    table.innerHTML += "<tr><td>Java:</td><td>" + (navigator.javaEnabled() ? "Si" : "No") + " disponible</td></tr>";

    //Google no funciona
    /*makeIframe("https://www.google.es/");*/
    makeIframe("https://www.marca.com");
}

// Función para crear un iframe
function makeIframe(page) {
    // creamos el elemento
    let iframe = document.createElement("iframe");
    iframe.id = "iframe";
    iframe.src = page;
    iframe.style.width = '800px';
    iframe.style.height = '600px';
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(iframe);
}

function closeWindow() {
    // Cerramos esta ventana emergente
    this.close();
}

//Segunda parte
let nombre, surname, birth, birthClean, day, month, year;

nombre = prompt("Introduce tu nombre:", "");

while(!nombre || nombre=="" || nombre==null){
    nombre=prompt("El nombre no puede estar en blanco.\nIntroduce tu nombre:", "");
}

surname = prompt("Introduce tu nombre:", "");

while(!surname || surname=="" || surname==null){
    nombre=prompt("El apellido no puede estar en blanco.\nIntroduce tu apellido:", "");
}

birth = prompt("Introduzca su fecha de nacimiento en formato DD/MM/YYYY:");
birthclean = birth.split("/");
day = parseInt(birth[0]);
month = parseInt(birth[1]);
year = parseInt(birth[2]);

console.log(day);
console.log(month);
console.log(year);
