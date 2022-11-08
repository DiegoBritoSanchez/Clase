//Menú de control
menuButton.addEventListener("click", menu);
function menu() {
    let opt;
    let control = true;
    disco5 = new Discs()
    opt = parseInt(prompt("Eliga una opción del menú: " +
        "\n 1. Mostrar número de discos." +
        "\n 2. Mostrar listado de discos." +
        "\n 3. Mostrar un intervalo de discos." +
        "\n 4. Añadir un disco." +
        "\n 5. Borrar un disco." +
        "\n 6. Consultar un disco" +
        "\n 7. Discos de prueba"));
    switch (opt) {
        case 1:
            disco5.total();
            break;
        case 2:
            opt = prompt("¿Orden normal o inverso, o alfabético?(O/I/A)", "O");
            if (opt.toUpperCase() == "O") {
                disco5.list();
            } else if (opt.toUpperCase() == "I") {
                disco5.listI();
            } else if (opt.toUpperCase() == "A") {
                disco5.sorted();
            } else {
                alert("Opción incorrecta...");
                location.reload();
            }
            break;
        case 3:
            opt = prompt("Introduce el primer intervalo a buscar...", 0);
            opt2 = prompt("Introduce el primer intervalo a buscar...", 1);
            disco5.interval(opt, opt2);
            break;
        case 4:
            opt = prompt("Introduce el nombre", "introducido");
            opt2 = prompt("Introduce el autor", "asdasd");
            do {
                opt3 = prompt("Introduce el año de publicacion (AAAA-MM-DD)", "2050-12-12");
                optSlice = opt3.split("-");
                if (optSlice.length != 2) {
                    control = false;
                }
            } while (control);
            do {
                opt4 = prompt("Introduce el género (rock, pop, punk, indie)", "rock");
                if (opt4 == "rock" || opt4 == "pop" || opt4 == "punk" || opt4 == "indie") {
                    control = false;
                }
            } while (control);
            opt5 = prompt("Introduce la localización", 5);
            disco4 = new Discs(opt, opt2, opt3, opt4, opt5);
            opt = prompt("Quiere añadirlo al principio o al final?(P/F)", "P");
            if (opt.toUpperCase() == "F") {
                library.push(disco4)
            } else if (opt.toUpperCase() == "P") {
                library.unshift(disco4);
            } else {
                alert("Opción incorrecta...");
                menu();
            }
            break;
        case 5:
            opt = prompt("Quiere borrarlo al principio o al final?(P/F)", "P");
            if (opt.toUpperCase() == "F") {
                library.pop(disco4)
            } else if (opt.toUpperCase() == "P") {
                library.shift(disco4);
            } else {
                alert("Opción incorrecta...");
                menu();
            }
            break;
        case 6:
            do {
                opt = prompt("¿Qué disco quiere consultar?", 0);
            } while (opt > library.length - 1 || opt < 0);
            disco5.toString(opt);
            break;
        case 7:
            disco1 = new Discs('prueba', 'grupo', "1990-01-10", 'rock', 1);
            disco2 = new Discs('aaaaa', 'bbbbb', "1999-01-10", 'pop', 2);
            disco3 = new Discs('zzzzz', 'xxxxx', "2000-01-10", 'rock', 3);
            library.push(disco1, disco3, disco2);
            break;
    }
}

var library = Array();
var disco1;
var disco2;
var disco3;
var disco4;
var disco5;
class Discs {
    name;
    author;
    publishedDate;
    type;
    location;
    loan;

    constructor(name, author, publishedDate, type, location) {
        this.name = name;
        this.author = author;
        this.publishedDate = publishedDate;
        this.type = type;
        this.location = location;
        this.loan = false;
    }
    total() {
        output.innerHTML = "<tr><td>Hay " + library.length + " discos en la biblioteca</td></tr>";
    }
    list() {
        output.innerHTML = " ";
        output.innerHTML = "<tr><th>Nombre</th><th>Autor</th><th>Fecha de publicación</th><th>Género</th><th>Posición</th></tr>";
        for (let i in library) {
            this.toString(i);
        }
    }
    listI() {
        output.innerHTML = " ";
        output.innerHTML = "<tr><th>Nombre</th><th>Autor</th><th>Fecha de publicación</th><th>Género</th><th>Posición</th></tr>";
        for (let i = library.length - 1; i >= 0; i--) {
            this.toString(i);
        }
    }
    sorted() {
        output.innerHTML = " ";
        output.innerHTML = "<tr><th>Nombre</th><th>Autor</th><th>Fecha de publicación</th><th>Género</th><th>Posición</th></tr>";
        let librarySorted = library.sort(function compare(a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        for (let i in librarySorted) {
            this.toString(i);
        }
    }
    interval(i, j) {
        output.innerHTML = " ";
        output.innerHTML = "<tr><th>Nombre</th><th>Autor</th><th>Fecha de publicación</th><th>Género</th><th>Posición</th></tr>";
        for (let k = i; k <= j; k++) {
            this.toString(k);
        }
    }
    toString(i) {
        output.innerHTML += "<tr><td>" + library[i].name + "</td><td>" + library[i].author + "</td><td>" + library[i].publishedDate + "</td><td>" + library[i].type + "</td><td>" + library[i].location + "</td></tr>";
    }
}