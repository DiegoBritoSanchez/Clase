//import building from "building.js";
var buildingCount = 0;
var block = new Array();
menuButton.addEventListener("click", menu);
function building(street, num, cp) {
    //Iniciamos los parámetros base de los edificios
    this.street = street;
    this.num = num;
    this.cp = cp;
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
            //Asignamos el número de puertas pasado como parámetro al array de puertas de cada planta
            for (let i = 0; i < this.floor + floor; i++) {
                this.doors[i] = door;
            }
            //Añadimos las plantas pasadas como parámetro a las plantas existentes en el edificio
            this.floor += parseInt(floor);
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
        console.log("Plantas: " + this.owners.length);
        console.log("Puertas: ");
        if ((floor < 0 || door < 0) || (floor > this.owners.length - 1)) {
            alert("Los datos introducidos son incorrectos.");
            menu();
        } else {

            this.owners[floor][door] = name;
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

    function printStreet() {
        return this.street;
    }
    function printNum() {
        return this.num;
    }
    function printCp() {
        return this.cp;
    }
    function printFloor() {
        alert("Listado de propietarios de la calle " + this.printStreet());
        for (let i = 0; i < this.floor; i++) {
            console.log(this.doors[i]);
            for (let j = 0; j < this.doors[i]; j++) {
                console.log("asasasas");
                alert("El propietario del piso " + j + " de la planta " + i + " es " + this.owners[i][j] + "\n");
            }
        }
    }

    function toString() {
        return this.street + ", " + this.num + ", " + this.cp + ", piso: " + this.floor + ", puerta: " + this.doors + ", " + this.owners + ".";
    }
    //Sumamos un edificio cada vez que creamos
    buildingCount++;
}
function menu() {
    let opt;
    opt = parseInt(prompt("Eliga una opción del menú: " +
        "\n 1. Mostrar número de edificios." +
        "\n 2. Crear edificio." +
        "\n 3. Añadir propietario." +
        "\n 4. Añade plantas y puertas." +
        "\n 5. Imprime un piso." +
        "\n 6. Imprimir."));
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
            block[0].addFloorDoor(1, 3);
            block[0].addOwner(nameP, floor, door);
            break;
        case 4:
            let opt = window.prompt("Pisos a añadir", 1);
            let opt2 = window.prompt("Puertas a añadir", 1);
            block[0].addFloorDoor(opt, opt2);
            break;
        case 5:
            block[0].printFloor();
            break;
        case 6:
            output.innerHTML = block[0].toString();
            break;
        default:
            break;
    }
}