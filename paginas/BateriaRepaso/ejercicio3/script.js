function ejercicio3() {
  let num1;
  let num2;
  num1 = window.prompt("Introduce un número");
  num2 = window.prompt("Introduce otro número");
  if (num1 > num2) {
    alert("El número " + num1 + " es mayor que " + num2);
  } else if (num1 < num2) {
    alert("El número " + num2 + " es mayor que " + num1);
  } else {
    alert("Los números son iguales");
  }
}
