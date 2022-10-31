//Variables
let salida1 = document.getElementById("salida1");
let salida2 = document.getElementById("salida2");
let salida3 = document.getElementById("salida3");

//Evento de escucha
nombre.addEventListener("input", tamanio);

function tamanio() {

  let palabra = document.getElementById("nombre").value;
  let palabraSplited = document.getElementById("nombre").value.split(" ");

  salida1.innerHTML = "Su nombre tiene " + (palabra.length - palabraSplited.length + 1) + " letras";

  salida2.innerHTML = "Su nombre en minúsculas es " + palabra.toLowerCase();

  salida3.innerHTML = "Su nombre en mayúsculas es " + palabra.toUpperCase();

  salida4.innerHTML = "Una propuesta de nombre de usuario sería: " + palabraSplited[0].substr(0,1) + palabraSplited[1] + palabraSplited[2].substr(0,1)
  
  salida5.innerHTML = "Otra propuesta de nombre de usuario podría ser: " + palabraSplited[0].substr(0,3) + palabraSplited[1].substr(0,3) + palabraSplited[2].substr(0,3);
}


