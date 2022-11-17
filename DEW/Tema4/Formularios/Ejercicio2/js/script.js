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

    var div = "div" + id;

    function setColors(value) {
        var divValue = value - 1;
        var colors = Array("red", "green", "black", "brown", "orange", "darkkhaki");
        var randomColor = colors[divValue];
        return randomColor;
    }

    var divValue = document.getElementById(div).getAttribute("value");

    document.getElementById(div).style.backgroundColor = setColors(divValue);

    
}

// * Programa
setValues();
