
/**Primera parte*/
//Creamos la fecha de hoy
let hoy = new Date();
//Creamos la fecha objetivo
let finCurso;
if (hoy.getMonth() == 5 && hoy.getDate() == 24) {
    finCurso = new Date(hoy.getFullYear() + 1, 05, 24);
} else if (hoy.getMonth() >= 6) {
    finCurso = new Date(hoy.getFullYear() + 1, 05, 24);
} else {
    finCurso = new Date(hoy.getFullYear(), 05, 24);
}
//Restamos el tiempo en milisegunds entre ambas fechas
let dias = finCurso.getTime() - hoy.getTime();
//Pasamos el tiempo de milisegundos a días para mostrar en pantalla
document.getElementById("finCurso").innerHTML += Math.round(dias / (1000 * 60 * 60 * 24)) + " días.";

/**Segunda parte*/
let input = document.getElementById("born");
input.addEventListener("input", calcSunday);
//Evento
let output = document.getElementById("sundays");

function calcSunday() {
    //Resetearel conteo cada vez que entra
    let count = 0;
    let day = input.value.split("/");
    let month = (day[1] - 1);
    if (month => 0 && month <= 11) {
        console.log(month + " mes");
        let future = new Date(2100, 11, 31);
        for (let index = hoy.getFullYear(); index < future.getFullYear(); index++) {
            let sundays = new Date(index, month, day[0]);
            console.log(sundays.getDate() + " prueba");
            console.log(sundays.getMonth() + " prueba2");
            console.log(sundays.getFullYear() + " prueba3");
            if (sundays.getDay() == 0) {
                count++;
            }
            output.innerHTML = "Desde hoy hasta el 2100 tu cumpleaños cae domingo " + count + " veces.";
        }
    }
    if (input.value.indexOf("/") == -1) {
        output.innerHTML = "";
    }
}


/**Tercera parte */

let format = document.getElementById("dates");
format.addEventListener("input", formats);

//Function
function formats() {
    let date = format.value;
    let dateSplitted = date.split("/");
    let dateFormat = new Date(dateSplitted[2], dateSplitted[1] - 1, dateSplitted[0]);

    if (typeof dateSplitted[2] != 'undefined' && dateSplitted[2] > 1500) {
        document.getElementById("formats").innerHTML = format.value;
        document.getElementById("formats").innerHTML += "</br>" + dateFormat.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" });
        document.getElementById("formats").innerHTML += "</br>" + dateFormat.toLocaleDateString('es-es', { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    } else {
        document.getElementById("formats").innerHTML = "";
    }


}