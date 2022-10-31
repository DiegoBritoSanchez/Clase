function ejercicio2() {
    let var1;
    let var2;
    let var3;
    document.getElementById("ejercicio2").innerHTML += typeof(var1) + "<br>";
    document.getElementById("ejercicio2").innerHTML += typeof(var2) + "<br>";
    document.getElementById("ejercicio2").innerHTML += typeof(var3) + "<br>";
    var1 = 8;
    var2 = "hola";
    var3 = ['Ejemplo'];
    document.getElementById("ejercicio2").innerHTML += typeof(var1) + "<br>";
    document.getElementById("ejercicio2").innerHTML += typeof(var2) + "<br>";
    document.getElementById("ejercicio2").innerHTML += typeof(var3) + "<br>";
}