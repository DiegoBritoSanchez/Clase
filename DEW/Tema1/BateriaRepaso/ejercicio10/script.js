function ejercicio10() {
    let doc = document.getElementById("piramide");
    let docAux = "";
    for (let index = 1; index <= 50; index++) {
        for (let i2 = 1; i2 <= index; i2++) {
            docAux += index;
        }
        docAux += "<br>";
    }
    doc.innerHTML = docAux;
}