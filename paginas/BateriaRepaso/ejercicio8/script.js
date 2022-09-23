function ejercicio8() {
  let val;
  let documento = document.getElementById("ejercicio8");
  let docAux = "";
  val = parseInt(prompt("Dame un número", ""));
  for (let index = val + val; index > val; val++) {
    docAux += "cuenta progresiva:" + val + "<br>";
  }
  for (let index = 0; index < val; val--) {
    docAux += "cuenta regresiva:" + val + "<br>";
  }
  documento.innerHTML = docAux;
}
