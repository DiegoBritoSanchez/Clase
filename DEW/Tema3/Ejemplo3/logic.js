//import building from "building.js";
var buildingCount = 0;
var block = new Array();
menuButton.addEventListener("click", menu);
function building(street, num, cp) {
    //Iniciamos los parámetros base de los edificios
    this.street = street;
    this.num = parseInt(num);
    this.cp = parseInt(cp);
    //Iniciamos los pisos del edificio
    this.floor = 0;
    this.currentFloor = 0;
    this.doors = new Array();
    //Creamos un arrar de propietarios que sereán asignamos mas tarde a cada puerta
    this.owners = new Array();
    //Creamos ahora todas las gestiones que se pueden hacer sobre cada edificio
    this.addFloorDoor = addFloorDoor;
    this.addOwner = addOwner;
    this.modifyStreet = modifyStreet;
    this.modifyNum = modifyNum;
    this.modifyCp = modifyCp;
    this.printStreet = printStreet;
    this.printNum = printNum;
    this.printCp = printCp;
    this.printFloor = printFloor;
    this.toString = toString;
    //Ahora procedemos a crear cada método que hemos referenciado previamente
    //Funcion para añadir plantas y puertas al edificio
    function addFloorDoor(floor, door) {
        //Comprobamos que los datos son correctos
        if (floor <= 0 || door <= 0) {
            output.innerHTML = "Los datos introducidos son incorrectos.";
        } else {
            //Asignamos el número de puertas pasado como parámetro al array de puertas de cada planta
            for (let i = 0; i < this.floor + floor; i++) {
                this.doors[i] = door - 1;
            }
            //Añadimos las plantas pasadas como parámetro a las plantas existentes en el edificio
            this.currentFloor = this.floor;
            this.floor = this.floor + parseInt(floor);
            output.innerHTML += "<tr><td>Se ha agregado un piso al edificio</td></tr>";
            //Ahora para cada propietario añadimos una segunda dimension en el array para asignarle una puerta
            for (let i = this.currentFloor; i <= this.floor; i++) {
                this.owners[i] = new Array();
                for (let e = 0; e <= this.doors[i]; e++) {
                    //Iniciamos cada propietario vacío
                    if (this.owners[i][e] == null) {
                        this.owners[i][e] = 0;
                        console.log("planta: " + i);
                        console.log("puerta: " + e);
                    }
                }
            }
        }
    }

    //Añadir propietarios. Pasamos como parámeto de control la planta y la puerta a la que pertenece
    function addOwner(name, floor, door) {
        //Comprobamos que los datos son correctos
        if ((floor < 0 || door < 0)) {
            alert("Los datos introducidos son incorrectos.");
            menu();
        } else {
            this.owners[floor - 1][door - 1] = name;
            console.log("propietario: " + this.owners[floor - 1][door - 1]);
        }
    }

    function modifyStreet(street) {
        this.street = street;
    }
    function modifyNum(num) {
        this.num = num;
    }
    function modifyCp(cp) {
        this.cp = cp;
    }
    function printStreet(street) {
        return this.street = street;
    }
    function printNum(num) {
        if (num > 0) { return num };
        return "S/N";
    }
    function printCp(cp) {
        return cp;
    }
    function printFloor() {
        output.innerHTML += "<tr><td><b>Listado de propietarios de la calle " + this.printStreet(street) + "</b></td></tr>";
        for (let i = 0; i <= this.floor; i++) {
            for (let j = 0; j <= this.doors[i]; j++) {
                let owner;
                if (this.owners[i][j] != 0) {
                    owner = this.owners[i][j];
                } else {
                    owner = "vacante";
                }
                output.innerHTML += "<tr><td>El propietario del piso " + (j + 1) + " de la planta " + (i + 1) + " es " + owner + "</td></tr>";
            }
        }
    }

    //Sumamos un edificio cada vez que creamos
    buildingCount++;
    output.innerHTML += "<td>Se ha creado un edificio en calle: " + printStreet(street) + ", nº: " + printNum(num) + ", CP: " + printCp(cp) + "</td>";

}
function menu() {
    let opt;
    opt = parseInt(prompt("Eliga una opción del menú: " +
        "\n 1. Mostrar número de edificios." +
        "\n 2. Crear edificio." +
        "\n 3. Añadir propietario." +
        "\n 4. Añade plantas y puertas." +
        "\n 5. Imprimer datos." +
        "\n 6. Insertar datos de prueba."));
    switch (opt) {
        case 1:
            alert("Hay " + buildingCount + " edificios");
            break;
        case 2:
            let name = window.prompt("¿Nombre de la calle?", "AAAAA");
            let num = window.prompt("¿Número del edificio?", 1);
            let cp = window.prompt("¿Código postal del edificio?", 1);
            block.push(new building(name, num, cp));
            break;
        case 3:
            let nameP = window.prompt("¿Nombre del propietario?", "José Luís");
            let floor = window.prompt("¿Piso del propietario?", 1);
            let door = window.prompt("¿Puerta del propietario?", 1);
            let blockN = window.prompt("¿Bloque del propietario?", 0);
            block[blockN].addOwner(nameP, floor, door);
            break;
        case 4:
            let opt = window.prompt("Pisos a añadir", 1);
            let opt2 = window.prompt("Puertas a añadir", 1);
            let blockNm = window.prompt("¿En qué bloque va a añadir el piso?", 0);
            block[blockNm].addFloorDoor(opt, opt2);
            break;
        case 5:
            block[window.prompt("Edificio a imprimir:")].printFloor();
            break;
        case 6:
            let edificioA = new building("García Prieto", 58, 15706);
            block.push(edificioA);
            let edificioB = new building("Camino Caneiro", 29, 32004);
            block.push(edificioB);
            let edificioC = new building("San Clemente", null, 15705);
            block.push(edificioC);
            block[0].addFloorDoor(2, 3);
            block[0].addOwner('José Antonio Lopez', 1, 1);
            block[0].addOwner('Luisa MArtinez', 1, 2);
            block[0].addOwner('Marta Castellón', 1, 3);
            block[0].addOwner('Antonio Pereira', 2, 2);
            block[0].printFloor();
            block[0].addFloorDoor(1, 3);
            block[0].addOwner('Pedro Meijide', 3, 2);
            block[0].printFloor();
            break;
        default:
            break;
    }
}
