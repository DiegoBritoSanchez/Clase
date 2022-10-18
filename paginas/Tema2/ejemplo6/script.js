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
    makeIframe("www.marca.com");
}