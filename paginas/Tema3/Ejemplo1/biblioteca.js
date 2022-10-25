//Menú de control
function menu() {
    let opt;
    opt = parseInt(prompt("Eliga una opción del menú: " +
        "\n 1. Mostrar número de discos." +
        "\n 2. Mostrar listado de discos." +
        "\n 3. Mostrar un intervalo de discos." +
        "\n 4. Añadir un disco." +
        "\n 5. Borrar un disco." +
        "\n 6. Consultar un disco"));
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
            var prueba = new Discs('prueba', 'grupo', new Date(), 'rock', 2, true);
            console.log(prueba.number);
            break;
        default:
            break;
    }
}

function total() {
    output.innerHTML = "Hay " + Discs.length + " discos en la biblioteca";
}

function list() {

}

class Discs {
    name;
    author;
    publishedDate;
    type;
    location;
    loan;

    constructor() {
        this.name = "";
        this.author = "";
        this.publishedDate = "";
        this.type = "";
        this.location = 0;
        this.loan = false;
    }
}