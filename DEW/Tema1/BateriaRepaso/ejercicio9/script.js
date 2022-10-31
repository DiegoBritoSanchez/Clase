function ejercicio9() {
    let val;
    let documento = document.getElementById("ejercicio9");
    val = parseInt(prompt("Dame un número", ""));
    let docAux = "";
    let valAux = val + val;
    while (val < valAux) {
        docAux += "cuenta progresiva:" + val + "<br>";
        val++;
    }
    while (val > 0) {
        docAux += "cuenta regresiva:" + val + "<br>";
        val--;
    }
    documento.innerHTML = docAux;
}