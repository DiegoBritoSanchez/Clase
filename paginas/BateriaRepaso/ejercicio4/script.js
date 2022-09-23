function ejercicio4() {
    let cadena = "";
    cadena = window.prompt("Escribe algo");
    if (cadena === "") {
        document.getElementById("ejercicio4").innerHTML = "Hola";
        console.log(1);
    } else {
        document.getElementById("ejercicio4").innerHTML += cadena;
        console.log(2);
    }
}