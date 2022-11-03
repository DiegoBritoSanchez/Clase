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
            //Guardamos el número de plantas existentes en el edificio
            let actuallyFloors = this.owners.length;
            console.log(actuallyFloors + " af");
            //Asignamos el número de puertas pasado como parámetro al array de puertas de cada planta
            for (let i = 0; i < this.floor + floor; i++) {
                this.doors[i] = door - 1;
            }
            //Añadimos las plantas pasadas como parámetro a las plantas existentes en el edificio
            this.floor = this.floor + parseInt(floor - 1);
            console.log(this.floor + " floor");
            //Ahora para cada propietario añadimos una segunda dimension en el array para asignarle una puerta
            for (let i = actuallyFloors; i <= this.floor; i++) {
                this.owners[i] = new Array();
                for (let e = 0; e <= this.doors[i]; e++) {
                    //Iniciamos cada propietario vacío
                    this.owners[i][e] = 0;
                }
            }
        }
    }

    //Añadir propietarios. Pasamos como parámeto de control la planta y la puerta a la que pertenece
    function addOwner(name, floor, door) {
        //Comprobamos que los datos son correctos
        if ((floor < 0 || door < 0) || (floor > this.owners.length)) {
            alert("Los datos introducidos son incorrectos.");
            menu();
        } else {
            this.owners[floor - 1][door - 1] = name;
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
        alert("Listado de propietarios de la calle " + this.printStreet(street));
        for (let i = 0; i <= this.floor; i++) {
            for (let j = 0; j <= this.doors[i]; j++) {
                alert("El propietario del piso " + (j + 1) + " de la planta " + (i + 1) + " es " + this.owners[i][j] + "\n");
            }
        }
    }

    function toString() {
        return this.street + ", " + this.num + ", " + this.cp + ", piso: " + this.floor + ", puerta: " + this.doors + ", " + this.owners + ".";
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
            let blockN = (window.prompt("¿Bloque del propietario?", 1) - 1);
            block[blockN].addOwner(nameP, floor, door);
            break;
        case 4:
            let opt = window.prompt("Pisos a añadir", 1);
            let opt2 = window.prompt("Puertas a añadir", 1);
            let blockNm = (window.prompt("¿En qué bloque va a añadir el piso?", 1) - 1);
            block[blockNm].addFloorDoor(opt, opt2);
            break;
        case 5:
            block[0].printFloor();
            break;
        case 6:
            let edificioA = new building("García Prieto", 58, 15706);
            block.push(edificioA);
            let edificioB = new building("Camino Caneiro", 29, 32004);
            block.push(edificioB);
            let edificioC = new building("San Clemente", null, 15705);
            block.push(edificioC);
            break;
        default:
            break;
    }
}
