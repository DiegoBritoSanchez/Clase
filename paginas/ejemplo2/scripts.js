const tabla7 = () => {
  let x = 0;
  let tabla = document.getElementById("tabla7");
  let tablaMult = "";
  do {
    tablaMult += "7 x " + x + " = " + 7 * x + "<br>";
    x++;
  } while (x <= 10);
  tabla.innerHTML = tablaMult;
};

const tabla8 = () => {
  let tabla = document.getElementById("tabla8");
  let tablaMult = "";
  for (let y = 0; y <= 10; y++) {
    tablaMult += "8 + " + y + " = " + (8 + y) + "<br>";
  }
  tabla.innerHTML = tablaMult;
};

const tabla9 = () => {
  let z = 0;
  let tabla = document.getElementById("tabla9");
  let tablaMult = "";
  while (z <= 10) {
    tablaMult += "9 + " + z + " = " + (8 / z).toFixed(2) + "<br>";
    z++;
  }
  tabla.innerHTML = tablaMult;
};

const bits = () => {
    let tabla = document.getElementById("bits");
    let aux = "";
    aux += "125 / 8 = " + (125>>3) + "<br>";
    aux += "40 x 4 = " + (40<<2) + "<br>";
    aux += "25 / 2 = " + (25>>1) + "<br>";
    aux += "10 x 16 = " + (10<<4) + "<br>";
    tabla.innerHTML = aux;
}