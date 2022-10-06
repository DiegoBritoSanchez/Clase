//Variables
let listado = ["hola", "juego", "adivinar", "acierto", "probando"];
let control;
let tempo = 60;
let muestra = document.getElementById("muestra");
let solucion = document.getElementById("solucion");
let entrada = document.getElementById("entrada");
let tiempo = document.getElementById("tiempo");
let intervalo;
let contador = 5;

//Obtenemos una palabra aleatoria e la lista
function aleatorio() {
  if (!control) {
    control = Math.floor(Math.random() * listado.length);
    //Generamos los asteriscos que forman la palabra oculta
    for (let index = 0; index < listado[control].length; index++) {
      muestra.innerHTML += "<span id='span" + index + "'>*</span>";
    }
    intervalo = setInterval(temporizador, 500000);
  }
}

//Creamos el evento listener
entrada.addEventListener("input", escribe);

//Funcion que escribe asteriscos(*) por cada letra de la palbra aleatoria que hemos seleecionado en la funcion aleatorio()
function escribe() {
  let palabra = listado[control];
  let span;

  //Controlamos que el input si no tiene datos no de problemas
  if (entrada.value == null) {
    return;
  }

//Comparamos para cada span si coincida con la letra ingresada por el input
  for (let index = 0; index < palabra.length; index++) {
    span = document.getElementById("span" + index);
    if (entrada.value == palabra.charAt(index)) {
      span.innerHTML = entrada.value;
    }
  }

  //Controlamos que el contador de aciertos se reduzca con cada fallo
  if (contador > 0) {
    if (!palabra.includes(entrada.value)) {
      contador--;
      document.getElementById("contador").innerHTML = contador + " intentos.";
    }
  } else {
    document.getElementById("contador").innerHTML = "Te has quedado sin intentos";
    clearInterval(intervalo);
    return;
  }

  //Reseteamos el contenido del input con cada letra que introduzcamos
  entrada.value = "";

  //Si acertamos todas las letras (si han desaparecido todos los asteriscos) damos por terminado el intervalo
  if (span.innerHTML != "*") {
    clearInterval(intervalo);
  }
}

//Iniciamos un temporizador
function temporizador() {
  if (tempo > 0) {
    tiempo.innerHTML = tempo;
    tempo--;
  }
  if (tempo == 0) {
    alert("Te has quedado sin tiempo");
  }
}
