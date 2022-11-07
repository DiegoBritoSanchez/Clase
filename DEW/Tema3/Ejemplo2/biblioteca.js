//Menú de control
menuButton.addEventListener("click", menu);
function menu() {
    let opt;
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
            total();
            break;
        case 2:
            opt = prompt("¿Orden normal o inverso, o alfabético?(O/I/A)", "O");
            if (opt.toUpperCase() == "O") {
                list();
            } else if (opt.toUpperCase() == "O") {
                listI();
            } else if (opt.toUpperCase() == "A") {
                sorted();
            } else {
                alert("Opción incorrecta...");
                location.reload();
            }
            break;
        case 3:
            break;
        case 7:
            library.push(new Discs('prueba', 'grupo', "1990-01-10", 'rock', 1));
            console.log(library[0]);
            break;
    }
}

// function total() {
//     output.innerHTML = "Hay " + Discs.length + " discos en la biblioteca";
// }

// function list() {

// }
var library = Array();
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
        output.innerHTML = "Hay " + Discs.length + " discos en la biblioteca";
    }
    list() {

    }
}

