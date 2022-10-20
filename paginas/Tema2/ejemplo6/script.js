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
function parte2() {
    let nombre, surname, fullName, birth, birthClean, day, month, year;
    let result = document.getElementById("result");

    //Funcion para calcular la edad
    function calcAge(day, month, year) {
        today = new Date();
        age = today.getFullYear() - year;
        if (month > today.getMonth() + 1) {
            age -= 1;
        } else if (month == today.getMonth() + 1) {
            if (day > today.getDate()) {
                age -= 1;
            }
        }
        if (isNaN(age))
            age = null;
        return age;
    }

    //Funcion para calcula la estación dada una fecha
    function calcSeason(day, month) {
        // Convertimos a número entero el valor introducido para el mes
        let monthStr = month.toString();
        // si hemos introducido el día sin cero inicial para valores inferiores a 10 se le añade cero al inicio
        if (day < 10) day = "0" + day;
        let dayStr = day.toString();
        // Juntamos (no sumamos) el mes y el año
        let dateStr = monthStr.concat(dayStr);
        // El resultado de la concatenación anterior se pasa a número entero
        let season = parseInt(dateStr);
        // si da un resultado mayor de 0 (101)
        if (season > 0) {
            // desde el 21 de marzo (321) hasta el 20 de junio (620) es primavera
            if (season >= 321 && season <= 620) {
                return "primavera";
                // desde el 21 de junio (621) hasta el 20 de septiembre (920) es verano
            } else if (season >= 621 && season <= 920) {
                return "verano";
                // desde el 21 de septiembre (921) hasta el 20 de diciembre (1220) es otoño
            } else if (season >= 921 && season <= 1220) {
                return "otoño";
                // cualquier otra fecha será invierno
            } else {
                return "invierno";
            }
        } else {
            return null;
        }
    }
    nombre = prompt("Introduce tu nombre:", "");

    while (!nombre || nombre == "" || nombre == null) {
        nombre = prompt("El nombre no puede estar en blanco.\nIntroduce tu nombre:", "");
    }

    surname = prompt("Introduce tus apellidos:", "");

    fullName = nombre + " " + surname;

    while (!surname || surname == "" || surname == null) {
        nombre = prompt("El apellido no puede estar en blanco.\nIntroduce tu apellido:", "");
    }

    day = parseInt(prompt("Introduce tu día de nacimiento:", ""));

    while (!day || day == "" || day == null) {
        day = parseInt(prompt("El día no puede estar en blanco.\nIntroducelo de nuevo:", ""));
    }

    month = parseInt(prompt("Introduce tu mes de nacimiento:", ""));

    while (!month || month == "" || month == null) {
        month = parseInt(prompt("El mes no puede estar en blanco.\nIntroducelo de nuevo:", ""));
    }

    year = parseInt(prompt("Introduce tu año de nacimiento:", ""));

    while (!year || year == "" || year == null) {
        year = parseInt(prompt("El año no puede estar en blanco.\nIntroducelo:", ""));
    }

    let nums = Array(34, 67, 23, 75, 35, 19);
    let max = 0;
    for (let i in nums) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    result.innerHTML += "<thead><th colspan='2'>Resultados</th></thead>";
    result.innerHTML += "<tr><td>Bienvenido:</td><td>" + fullName + "</td></tr>";
    result.innerHTML += "<tr><td>Tu nombre tiene</td><td>" + fullName.length + " caracteres.</td></tr>";
    if (fullName.indexOf("a") >= 0 || fullName.indexOf("á") >= 0) {
        result.innerHTML += "<tr><td>La primera A de tu nombre está en la posición</td><td>" + (fullName.indexOf("a") + 1 || fullName.indexOf("á") + 1) + "</td></tr>";
        result.innerHTML += "<tr><td>La última A de tu nombre está en la posición</td><td>" + (fullName.lastIndexOf("a") + 1 || fullName.lastIndexOf("á") + 1) + ".</td></tr>";
    } else {
        result.innerHTML += "<tr><td colspan='2'>Tu nombre no contiene ninguna A.</td></tr>";

    }
    result.innerHTML += "<tr><td>Tu nombre menos las 3 primeras letras es</td><td>" + (nombre.substring(3, nombre.length)) + "</td></tr>";
    result.innerHTML += "<tr><td>Tu nombre todo en mayúsculas es</td><td>" + nombre.toUpperCase() + "</td></tr>";
    result.innerHTML += "<tr><td>Tu edad es</td><td>" + calcAge(day, month, year) + "</td></tr>";
    result.innerHTML += "<tr><td>Naciste un feliz</td><td>" + calcSeason(day, month) + " de " + year + ".</td></tr>";
    result.innerHTML += "<tr><td>El coseno de 180 es</td><td>" + Math.cos(180) + "</td></tr>";
    result.innerHTML += "<tr><td>El número mayor de (34, 67, 23, 75, 35, 19) es </td><td>" + max + "</td></tr>";
    result.innerHTML += "<tr><td>Ejemplo de número al azar</td><td>" + Math.floor(Math.random() * 10) + "</td></tr>";

}
