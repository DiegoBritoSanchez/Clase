// * Variables
var card1;
var card2;
var control;
var counter = 0;
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

        } else {
            card2 = document.getElementById(div).getAttribute("value");
            divValue = card2;

        }
        counter++;
        if (control) {
            document.getElementById(div).className += " rotate-center";
            document.getElementById(div).style.backgroundColor = setColors(divValue);
        }

        setTimeout(test, 4000);

        function test() {
            if (typeof card2 !== 'undefined') {

                if (card1 == card2) {
                    success++;

                    document.getElementById("success").innerHTML = "Aciertos: " + success;
                    var rst = true;
                    resetCounts(rst);
                } else {

                    error++;
                    document.getElementById("fail").innerHTML = "Fallos: " + error;
                    var rst = false;
                    resetCounts(rst);
                    resetClass();
                }

            }
        }

        function resetClass() {
            var eraseClass = document.querySelectorAll("div.rotate-center");
            eraseClass.forEach(element => {
                console.log(element.value);
                element.style.backgroundColor = "#6610f2";
                element.classList.remove("rotate-center");
            });
        }

        function resetCounts(rst) {
            card1 = undefined;
            card2 = undefined;
            counter = 0;
            if (rst) {
                var eraseValue = document.querySelectorAll("div.rotate-center");
                eraseValue.forEach(elements => {
                    elements.removeAttribute("onclick");
                    elements.classList.remove("rotate-center");
                })
            }
            ;
        }
    }


}

// * Programa
setValues();
