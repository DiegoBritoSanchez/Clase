let country = ["Albania", "Alemania", "Andorra", "Armenia", "Austria", "Bélgica", "Bielorrusia", "Bosnia y Herzegovina", "Bulgaria",
    "Ciudad del Vaticano", "Croacia", "Dinamarca", "Eslovaquia", "Eslovenia", "España", "Estonia", "Francia", "Grecia", "Guatemala",
    "Hungría", "Irlanda", "Islandia", "Italia", "Letonia", "Liechtenstein", "Lituania", "Luxemburgo", "Malta", "Mónaco", "Mongolia",
    "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Países Bajos",
    "Polonia", "Portugal", "Reino Unido", "República Checa", "República de Macedonia", "Rumanía", "Rusia", "San Marino", "Serbia",
    "Suecia", "Suiza", "Ucrania"];
//Total
function total() {
    document.getElementById("total").innerHTML = country.length + " paises.";
}

//todo
function list() {
    document.getElementById("list").innerHTML = "";
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById("list").innerHTML += country[i] + ".";
        } else {
            document.getElementById("list").innerHTML += country[i] + ", ";
        }
    }
}

//todo inverso
function listI() {
    document.getElementById("listI").innerHTML = " ";
    for (let i = country.length - 1; i >= 0; i--) {
        if (i == 0) {
            document.getElementById("listI").innerHTML += country[i] + ".";
        } else {
            document.getElementById("listI").innerHTML += country[i] + ", ";
        }
    }
}

//ordenado
function sorted() {
    document.getElementById("alphabetical").innerHTML = "";
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById("alphabetical").innerHTML += country.sort()[i] + ".";
        } else {
            document.getElementById("alphabetical").innerHTML += country.sort()[i] + ", ";
        }
    }
}

//añadir elemento final
function pushed() {
    document.getElementById("pushed").innerHTML = "";
    country.push("prueba");
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById("pushed").innerHTML += country[i] + ".";
        } else {
            document.getElementById("pushed").innerHTML += country[i] + ", ";
        }
    }
}
//añadir elemento primero
function shifted() {
    document.getElementById("shifted").innerHTML = "";
    country.unshift("elemento1");
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById("shifted").innerHTML += country[i] + ".";
        } else {
            document.getElementById("shifted").innerHTML += country[i] + ", ";
        }
    }
}
