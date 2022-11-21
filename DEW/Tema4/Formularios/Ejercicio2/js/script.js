// * Variables
var card1;
var card2;
var control;
var counter = 0;
var divAux1;
var divAux2;
var success = 0;
var error = 0;
// * Funciones
function setValues() {
    var values = Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6);

    for (let i = 1; i < 13; i++) {
        var randomValue = Math.floor(Math.random() * values.length);

        document.getElementById("div" + i).setAttribute("value", values[randomValue]);

        document.getElementById("div" + i).setAttribute("onclick", "comprobar(" + i + ")");

        values.splice(randomValue, 1);
    }

}

function comprobar(id) {
    if (counter < 2) {
        var div = "div" + id;
        function setColors(value) {
            var divValue = value - 1;
            var colors = Array("red", "green", "black", "brown", "orange", "darkkhaki");
            var randomColor = colors[divValue];
            return randomColor;
        }

        if (typeof card1 === 'undefined') {
            card1 = document.getElementById(div).getAttribute("value");
            divValue = card1;
            control = true;
            divAux1 = "div" + id;
        } else {
            card2 = document.getElementById(div).getAttribute("value");
            divValue = card2;
            divAux2 = "div" + id;
            control = true;
        }
        counter++;
        if (control) {
            document.getElementById(div).className += " rotate-center";
            document.getElementById(div).style.backgroundColor = setColors(divValue);
        }

        setTimeout(test, 2500);
        console.log(card1);
        console.log(card2);
        function test() {
            if (typeof card2 !== 'undefined') {

                if (card1 == card2) {
                    counter = 0;
                    success++;
                    document.getElementById("success").innerHTML = "Aciertos: " + success;
                } else {
                    counter = 0;
                    card1 = undefined;
                    card2 = undefined;
                    error++;
                    document.getElementById("fail").innerHTML = "Fallos: " + error;
                    document.getElementById(divAux1).style.backgroundColor = "#6610f2";
                    document.getElementById(divAux2).style.backgroundColor = "#6610f2";
                    // document.querySelectorAll()

                }
            }
        }


    }


}

// * Programa
setValues();
