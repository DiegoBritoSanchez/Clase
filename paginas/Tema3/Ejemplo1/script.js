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
function pop(id) {
    document.getElementById(id).innerHTML = "";
    let lastElement = country[country.length - 1];
    country.pop();
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById(id).innerHTML += country[i] + ".";
            document.getElementById(id).innerHTML += "<b> Se ha borrado " + lastElement + "</b>";
        } else {
            document.getElementById(id).innerHTML += country[i] + ", ";
        }
    }
}
//borrar elemento primero
function shift(id) {
    document.getElementById(id).innerHTML = "";
    let firstElement = country[1];
    country.shift();
    for (let i in country) {
        if (i == country.length - 1) {
            document.getElementById(id).innerHTML += country[i] + ".";
            document.getElementById(id).innerHTML += "<b> Se ha borrado " + firstElement + "</b>";
        } else {
            document.getElementById(id).innerHTML += country[i] + ", ";
        }
    }
}
//Muestra el elemento en la posición indicada
function show(id) {
    let pos;
    do {
        pos = parseInt(prompt("Introduce la posición deseada", "0")) - 1;
    } while (isNaN(pos));
    document.getElementById(id).innerHTML += country[pos];
}
//Muestra la posición de elemento indicado
function showI(id) {
    document.getElementById(id).innerHTML = "";
    let pos;
    do {
        pos = prompt("Introduce el país a buscar", "España");
    } while (pos == undefined);
    let posCapital = pos.charAt(0).toUpperCase() + pos.slice(1);
    let control = false;
    for (let i in country) {
        if (country[i] == posCapital) {
            document.getElementById(id).innerHTML += "El elemento buscado (" + pos + ") está en la posición " + (parseInt(i) + 1);
            control = false;
            break;
        } else {
            control = true;
        }
    }
    if (control) {
        document.getElementById(id).innerHTML += "El elemento buscado no existe";
    }
}
//Muestra los elementos que se encuentran en un intervalo que el usuario indica.
function showInterval(id) {
    document.getElementById(id).innerHtml = "";
    let pos1;
    let pos2;
    do {
        pos1 = parseInt(prompt("Introduce la posición inicial", "1")) - 1;
        pos2 = parseInt(prompt("Introduce la posición final", "2"));
    } while (isNaN(pos1) && isNaN(pos2));
    let countrySlice = country.slice(pos1, pos2);
    for (let i = 0; i < countrySlice.length; i++) {
        if (i == countrySlice.length - 1) {
            document.getElementById(id).innerHTML += countrySlice[i] + ".";
        } else {
            document.getElementById(id).innerHTML += countrySlice[i] + ", ";
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
        case 2:
            opt = prompt("¿Orden normal o inverso?(O/I)", "O");
            if (opt.toUpperCase() == "O") {
                list("segundaParte");
            } else if (opt.toUpperCase() == "O") {
                listI("segundaParte");
            } else {
                alert("Opción incorrecta...");
                location.reload();
            }
            break;
        case 3:
            showInterval("segundaParte");
            break;
        case 4:
            opt = prompt("¿Desea añadir un país al principio o al final?(P/F)", "P");
            if (opt.toUpperCase() == "P") {
                opt = prompt("¿Qué país desea añadir?", "Tuvalu");
                unshift("segundaParte", opt);
            } else if (opt.toUpperCase() == "F") {
                opt = prompt("¿Qué país desea añadir?", "Tuvalu");
                pushed("segundaParte", opt);
            } else {
                location.reload();
            }
            break;
        case 5:
            opt = prompt("¿Desea borrar un país al principio o al final?(P/F)", "P");
            if (opt.toUpperCase() == "P") {
                shift("segundaParte");
            } else if (opt.toUpperCase() == "F") {
                pop("segundaParte");
            } else {
                location.reload();
            }
            break;
        case 6:
            opt = prompt("¿Desea consultar por país o por posición?(C/P)", "P");
            if (opt.toUpperCase() == "C") {
                showI("segundaParte");
            } else if (opt.toUpperCase() == "P") {
                show("segundaParte");
            } else {
                location.reload();
            }
            break;
        default:
            location.reload();
            break;
    }

}
