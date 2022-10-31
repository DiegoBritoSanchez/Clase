let buildingCount = 0;
let block = new Array();
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
    // this.modifyStreet = modifyStreet;
    // this.modifyNum = modifyNum;
    // this.modifyCp = modifyCp;
    // this.printStreet = printStreet;
    // this.printNum = printNum;
    // this.printCp = printCp;
    // this.printFloor = printFloor;
    //Ahora procedemos a crear cada método que hemos referenciado previamente
    //Funcion para añadir plantas y puertas al edificio
    function addFloorDoor(floor, door) {
        //Comprobamos que los datos son correctos
        if (floor <= 0 || door <= 0) {
            outPut.innerHTML = "Los datos introducidos son incorrectos.";
        } else {
            //Guardamos el número de plantas existentes en el edificio
            let actuallyFloors = owners.length;
            //Asignamos el número de puertas pasado como parámetro al array de puertas de cada planta
            for (let i = 0; i < this.door + door; i++) {
                this.doors[i] = door;
            }
            //Añadimos las plantas pasadas como parámetro a las plantas existentes en el edificio
            this.floor = floor;
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
        if (floor <= 0 || door <= 0) {
            outPut.innerHTML = "Los datos introducidos son incorrectos.";
        }
    }
    function toString2() {
        return this.street + " " + this.num + " " + this.cp + " " + this.floor + " " + this.doors + " " + this.owners + " " + this.floor + " " + this.cp + " ";
    }
    //Sumamos un edificio cada vez que creamos
    buildingCount++;
    console.log(this.street);
}

function menu() {
    let opt;
    opt = parseInt(prompt("Eliga una opción del menú: " +
        "\n 1. Mostrar número de edificios." +
        "\n 2. Crear edificio." +
        "\n 3. Mostrar un intervalo de discos." +
        "\n 4. Añadir un disco." +
        "\n 5. Borrar un disco." +
        "\n 6. Consultar un disco"));
    switch (opt) {
        case 1:
            alert("Hay " + buildingCount + " edificios");
            break;
        case 2:
            let name = window.prompt("¿Nombre de la calle?", "AAAAA");
            let num = window.prompt("¿Número del edificio?", 1);
            let cp = window.prompt("¿Código postal del edificio?", 1);
            ed = new building(name, num, cp);
            block.push(ed);
            
            output.innerHTML = ed.;
            break;
        case 3:
            var prueba = new Discs('prueba', 'grupo', new Date(), 'rock', 2, true);
            console.log(prueba.number);
            break;
        default:
            break;
    }
}

menuButton.addEventListener("click", menu);
let ed = new building();