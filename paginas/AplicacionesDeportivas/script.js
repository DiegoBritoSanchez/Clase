function calculoIMC() {
  let peso = 1;
  let altura = 1;
  let imcAux;
  let control = true;
  do {
    peso = prompt("Introduzca su peso", "50");
    altura = prompt("Introduzca su altura", "1.50");
    if (isNaN(peso)) {
      alert("Peso incorrecto");
      control = true;
    } else if (isNaN(altura)) {
      alert("Altura incorrecta");
      control = true;
    } else {
      control = false;
    }
  } while (control);
  imcAux = (peso / (altura * altura)).toFixed(2);
  let p = document.getElementById("imcCalculo");
  if (imcAux < 16) {
    p.setAttribute("style", "color: #f30");
    document.getElementById("imcCalculo").innerHTML =
      "Su imc es " + imcAux + ". Delgadez severa.";
  } else if (imcAux >= 16 && imcAux < 17) {
    p.setAttribute("style", "color: #f60");
    document.getElementById("imcCalculo").innerHTML =
      "Su imc es " + imcAux + ". Delgadez moderada.";
  } else if (imcAux >= 17 && imcAux < 18.5) {
    p.setAttribute("style", "color: #f90");
    document.getElementById("imcCalculo").innerHTML =
      "Su imc es " + imcAux + ". Delgadez aceptable.";
  } else if (imcAux >= 18.5 && imcAux < 25) {
    p.setAttribute("style", "color: #0f0");
    document.getElementById("imcCalculo").innerHTML =
      "Su imc es " + imcAux + ". Peso normal.";
  } else if (imcAux >= 25 && imcAux < 30) {
    p.setAttribute("style", "color: #f90");
    document.getElementById("imcCalculo").innerHTML =
      "Su imc es " + imcAux + ". Sobrepeso.";
  } else if (imcAux >= 30 && imcAux < 35) {
    p.setAttribute("style", "color: #f60");
    document.getElementById("imcCalculo").innerHTML =
      "Su imc es " + imcAux + ". Obeso (Tipo I).";
  } else if (imcAux >= 35 && imcAux < 40) {
    p.setAttribute("style", "color: #f30");
    document.getElementById("imcCalculo").innerHTML =
      "Su imc es " + imcAux + ". Obeso (Tipo II).";
  } else if (imcAux > 40) {
    p.setAttribute("style", "color: #f00");
    document.getElementById("imcCalculo").innerHTML =
      "Su imc es " + imcAux + ". Obeso (Tipo III).";
  }

  //document.getElementById("imcCalculo").innerHTML += "Su imc es "+imcAux;
}

function calculoFCM() {
  let edad;
  let sexo;
  let tabla = document.createElement("tr");
  let fila;

  edad = prompt("Introduzca su edad", "25");
  sexo = prompt("Introduzca su sexo", "Hombre/Mujer");
  
  if (sexo.toLowerCase() == "hombre") {
    let fcm = 209 - 0.7 * edad;
  } else if (sexo.toLowerCase() == "mujer") {
    let fcm = 214 - 0.8 * edad;
  }

  fila = document.createTextNode(fcm);
  tabla.appendChild(fila);
  document.getElementById("fmcTabla").appendChild(tabla);
}
