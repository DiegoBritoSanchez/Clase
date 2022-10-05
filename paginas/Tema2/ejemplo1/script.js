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
    intervalo = setInterval(temporizador, 500);
  }
}

entrada.addEventListener("input", escribe);

function escribe() {
  let palabra = listado[control];
  let span;

  if (entrada.value == null) {
    return;
  }

  for (let index = 0; index < palabra.length; index++) {
    span = document.getElementById("span" + index);
    if (entrada.value == palabra.charAt(index)) {
      span.innerHTML = entrada.value;
    }
  }
  if (contador > 0) {
    if (!palabra.includes(entrada.value)) {
      console.log(contador);
      contador--;
      document.getElementById("contador").innerHTML = contador + " intentos.";
    }
  } else {
    document.getElementById("contador").innerHTML = "Te has quedado sin intentos";
    clearInterval(intervalo);
    return;
  }

  entrada.value = "";
  if (span.innerHTML != "*") {
    clearInterval(intervalo);
  }
}

function temporizador() {
  if (tempo > 0) {
    tiempo.innerHTML = tempo;
    tempo--;
  }
  if (tempo == 0) {
    alert("Te has quedado sin tiempo");
  }
}
