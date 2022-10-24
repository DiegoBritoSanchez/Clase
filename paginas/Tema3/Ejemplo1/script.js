//u4e1
let country = ["Albania", "Alemania", "Andorra", "Armenia", "Austria", "Bélgica", "Bielorrusia", "Bosnia y Herzegovina", "Bulgaria",
    "Ciudad del Vaticano", "Croacia", "Dinamarca", "Eslovaquia", "Eslovenia", "España", "Estonia", "Francia", "Grecia", "Guatemala",
    "Hungría", "Irlanda", "Islandia", "Italia", "Letonia", "Liechtenstein", "Lituania", "Luxemburgo", "Malta", "Mónaco", "Mongolia",
    "Montenegro", "Noruega", "Nueva Zelanda", "Países Bajos", "Polonia", "Portugal", "Reino Unido", "República Checa",
    "República de Macedonia", "Rumanía", "Rusia", "San Marino", "Serbia", "Suecia", "Suiza", "Ucrania"];
//Total
function total(id) {
    document.getElementById(id).innerHTML = country.length + " paises.";
}

//todo
function list(id) {
    document.getElementById(id).innerHTML = "";
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById(id).innerHTML += country[i] + ".";
        } else {
            document.getElementById(id).innerHTML += country[i] + ", ";
        }
    }
}

//todo inverso
function listI(id) {
    document.getElementById(id).innerHTML = " ";
    for (let i = country.length - 1; i >= 0; i--) {
        if (i == 0) {
            document.getElementById(id).innerHTML += country[i] + ".";
        } else {
            document.getElementById(id).innerHTML += country[i] + ", ";
        }
    }
}

//ordenado
function sorted(id) {
    document.getElementById(id).innerHTML = "";
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById(id).innerHTML += country.sort()[i] + ".";
        } else {
            document.getElementById(id).innerHTML += country.sort()[i] + ", ";
        }
    }
}

//añadir elemento final
function pushed(id, pais) {
    document.getElementById(id).innerHTML = "";
    country.push(pais);
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById(id).innerHTML += country[i] + ".";
        } else {
            document.getElementById(id).innerHTML += country[i] + ", ";
        }
    }
}
//añadir elemento primero
function unshift(id, pais) {
    document.getElementById(id).innerHTML = "";
    country.unshift(pais);
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById(id).innerHTML += country[i] + ".";
        } else {
            document.getElementById(id).innerHTML += country[i] + ", ";
        }
    }
}
//borrar elemento final 
function pop() {
    document.getElementById("pop").innerHTML = "";
    let lastElement = country[country.length - 1];
    console.log(lastElement);
    country.pop();
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById("pop").innerHTML += country[i] + ".";
            document.getElementById("pop").innerHTML += "<b> Se ha borrado " + lastElement + "</b>";
        } else {
            document.getElementById("pop").innerHTML += country[i] + ", ";
        }
    }
}
//borrar elemento primero
function shift() {
    document.getElementById("shift").innerHTML = "";
    let firstElement = country[1];
    country.shift();
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById("shift").innerHTML += country[i] + ".";
            document.getElementById("shift").innerHTML += "<b> Se ha borrado " + firstElement + "</b>";
        } else {
            document.getElementById("shift").innerHTML += country[i] + ", ";
        }
    }
}
//Muestra el elemento en la posición indicada
function show() {
    let pos;
    do {
        pos = parseInt(prompt("Introduce la posición deseada", "0")) - 1;
    } while (isNaN(pos));
    document.getElementById("show").innerHTML += country[pos];
}
//Muestra la posición de elemento indicado
function showI() {
    document.getElementById("showI").innerHTML = "";
    let pos;
    do {
        pos = prompt("Introduce el país a buscar", "España");
    } while (pos == undefined);
    let posCapital = pos.charAt(0).toUpperCase() + pos.slice(1);
    let control = false;
    for (let i in country) {
        if (country[i] == posCapital) {
            document.getElementById("showI").innerHTML += "El elemento buscado (" + pos + ") está en la posición " + (parseInt(i) + 1);
            control = false;
            break;
        } else {
            control = true;
        }
    }
    if (control) {
        document.getElementById("showI").innerHTML += "El elemento buscado no existe";
    }
}
//Muestra los elementos que se encuentran en un intervalo que el usuario indica.
function showInterval() {
    document.getElementById("showInterval").innerHtml = "";
    let pos1;
    let pos2;
    do {
        pos1 = parseInt(prompt("Introduce la posición inicial", "1")) - 1;
        pos2 = parseInt(prompt("Introduce la posición final", "2"));
    } while (isNaN(pos1) && isNaN(pos2));
    let countrySlice = country.slice(pos1, pos2);
    for (let i = 0; i < countrySlice.length; i++) {
        if (i == countrySlice.length - 1) {
            document.getElementById("showInterval").innerHTML += countrySlice[i] + ".";
        } else {
            document.getElementById("showInterval").innerHTML += countrySlice[i] + ", ";
        }
    }

}
//u4e2
if (document.getElementById("segundaParte")) {
    let opt;
    opt = parseInt(prompt("Eliga una opción del menú: " +
        "\n 1. Mostrar número de países" +
        "\n 2. Mostrar listado de países" +
        "\n 3. Mostrar un intervalo de países" +
        "\n 4. Añadir un país" +
        "\n 5. Borrar un país" +
        "\n 6. Consultar un país"));
    switch (opt) {
        case 1:
            total("segundaParte");
            break;

        default:
            break;
    }

}
