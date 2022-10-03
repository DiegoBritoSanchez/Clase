function ejercicio6() {
  let archivo;
  for (let index = 1; index < 7; index++) {
    document.getElementById("bucle" + index).innerHTML = "Encabeazdo de nivel " + index;
    console.log(index);
  }
}
