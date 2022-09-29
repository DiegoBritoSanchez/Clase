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
  let p = document.getElementById("fmcP");
  let fcm;
  let control;

  
  do {
    control = true;
    edad = prompt("Introduzca su edad", "25");
    sexo = prompt("Introduzca su sexo", "Hombre/Mujer");
    if (sexo.toLowerCase() == "hombre") {
      fcm = (209 - 0.7 * edad).toFixed(2);
      control = false;
    } else if (sexo.toLowerCase() == "mujer") {
      fcm = (214 - 0.8 * edad).toFixed(2);
      control = false;
    }
  } while (control || edad < 1);

  p.innerHTML = "Su frecuencia cardíaca es " + fcm + "</br> Su zona de recuperación oscila entre " + (fcm * 0.6).toFixed(2) +
    " y " + (fcm * 0.7).toFixed(2)+"</br>";
  p.innerHTML += "Su zona earóbica oscila entre " + (fcm * 0.7).toFixed(2) + " y " + (fcm * 0.8).toFixed(2)+"</br>";
  p.innerHTML += "Su zona anaebórica oscila entre " + (fcm * 0.8).toFixed(2) + " y " + (fcm * 0.9).toFixed(2)+"</br>";
  p.innerHTML += "Su zona línea roja oscila entre " + (fcm * 0.9).toFixed(2) + " y " + fcm +"</br>";
}

function categoria() {
  let edad = prompt("Introduzca su edad", "25");
  document.getElementById("cat").innerHTML = "";
  document.getElementById("cat2").innerHTML = "";
  document.getElementById("cat3").innerHTML = "";
  document.getElementById("cat4").innerHTML = "";
  document.getElementById("cat5").innerHTML = "";
  document.getElementById("cat6").innerHTML = "";
  document.getElementById("cat7").innerHTML = "";
  document.getElementById("cat8").innerHTML = "";

  
  switch (true) {
    case  edad < 8:
        document.getElementById("cat").innerHTML = "<==";
      break;
    case  edad <= 10:
        document.getElementById("cat2").innerHTML = "<==";
      break;
    case  edad <= 12:
        document.getElementById("cat3").innerHTML = "<==";
      break;
    case  edad <= 14:
        document.getElementById("cat4").innerHTML = "<==";
      break;
    case  edad <= 16:
        document.getElementById("cat5").innerHTML = "<==";
      break;
    case  edad <= 18:
        document.getElementById("cat6").innerHTML = "<==";
      break;
    case  edad <= 20:
        document.getElementById("cat7").innerHTML = "<==";
      break;
    case  edad >= 21:
        document.getElementById("cat8").innerHTML = "<==";
      break;
  }

}