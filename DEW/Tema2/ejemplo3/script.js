//Declaramos las variables que necesitamos
let input = document.getElementById("hidden");
let res = document.getElementById("resultado");
let res2 = document.getElementById("resultado2");
let radius = document.getElementById("circulo");
function potencia() {
  //Reseteamos el campo del resultado
  res.innerHTML = "";
  //Le asignamos dos inputs para trabajar
  input.innerHTML = "<h4>Introduce la base:</h4><input type='text' id='base'>";
  input.innerHTML += "<h4>Introduce el exponente:</h4><input type='text' id='exp'>";
  //Creamos el evento de escucha
  let base = document.getElementById("base");
  let exp = document.getElementById("exp");
  base.addEventListener("input", resultado);
  exp.addEventListener("input", resultado);
  //Creamos la funcion del calculo de exponencia
  function resultado() {
    if (parseInt(base.value) && parseInt(exp.value)) {
      if (!isNaN(base.value) && !isNaN(exp.value)) {
        res.innerHTML = "<tr><td>La potencia de " + base.value + " elevado a " + exp.value + " es: " + Math.pow(base.value, exp.value) + "</td></td>";
      } else {
        res.innerHTML = "Introduce un valor válido";
      }
    }
  }
}

function raiz() {
  //Reseteamos
  res.innerHTML = "";
  //Le asignamos un input para trabajar
  input.innerHTML = "<h4>Introduce la base:</h4><input type='text' id='base'>";
  //Creamos el evento de escucha
  let base = document.getElementById("base");
  base.addEventListener("input", resultado);
  //Creamos la funcion del cálculo de raíz
  function resultado() {
    if (parseInt(base.value) > 0) {
      if (!isNaN(base.value)) {
        res.innerHTML = "<tr><td>La raíz cuadrada de " + base.value + " es: " + Math.sqrt(base.value) + "</td></td>";
      } else {
        res.innerHTML = "Introduce un valor válido";
      }
    } else {
      res.innerHTML = "Introduce un valor válido";
    }
  }
}

function redondeo() {
  //Reseteamos
  res.innerHTML = "";
  //Le asignamos un input para trabajar
  input.innerHTML = "<h4>Introduce un número decimal:</h4><input type='text' id='base'>";
  //Creamos el evento de escucha
  let base = document.getElementById("base");
  base.addEventListener("input", resultado);
  //Creamos la funcion del cálculo de raíz
  function resultado() {
    let flotante = parseFloat(base.value);
    if (flotante % 1 != 0) {
      if (!isNaN(flotante)) {
        res.innerHTML = "<tr><td>El redondeo superior de " + base.value + " es: " + Math.ceil(flotante) + " y el inferior es: " + Math.floor(flotante) + "</td></td>";
      } else {
        res.innerHTML = "Introduce un valor válido";
      }
    } else {
      res.innerHTML = "Introduce un valor válido";
    }
  }
}

function trigonometria() {
  //Reseteamos
  res.innerHTML = "";
  //Le asignamos un input para trabajar
  input.innerHTML = "<h4>Introduce un ángulo:</h4><input type='text' id='base'>";
  //Creamos el evento de escucha
  let base = document.getElementById("base");
  base.addEventListener("input", resultado);
  //Creamos la funcion del cálculo de raíz
  function resultado() {
    let flotante = parseInt(base.value);
    if (flotante >= 0 && flotante <= 360) {
      if (!isNaN(flotante)) {
        res.innerHTML = "<tr><td>El seno de " + flotante + " es " + Math.sin(flotante).toFixed(5) + "</td></tr>";
        res.innerHTML += "<tr><td>El coseno de " + flotante + " es " + Math.cos(flotante).toFixed(5) + "</td></tr>";
        res.innerHTML += "<tr><td>La tangente de " + flotante + " es " + Math.tan(flotante).toFixed(5) + "</td></tr>";
      } else {
        res.innerHTML = "Introduce un valor válido";
      }
    } else {
      res.innerHTML = "Introduce un valor válido";
    }
  }
}

//Evento de escucha
radius.addEventListener("input", circulo);
//Función con los cálculos necesarios
function circulo() {
  //Mostramos los resultados
  res2.innerHTML = "<td><tr>El valor del radio es " + radius.value + "cm</tr></td>";
  res2.innerHTML += "<td><tr>El valor del diámetro es " + 2 * radius.value + "cm</tr></td>";
  res2.innerHTML += "<td><tr>El perímetro de la circunferencia es " + (Math.PI * (2 * radius.value)).toFixed(3) + "cm2</tr></td>";
  res2.innerHTML += "<td><tr>El área del círculo es " + (Math.PI * Math.pow(radius.value, 2)).toFixed(3) + "cm2</tr></td>";
  res2.innerHTML += "<td><tr>El área de la esfera es " + (4 * Math.PI * Math.pow(radius.value, 2)).toFixed(3) + "</tr></td>";
  res2.innerHTML += "cm3<td><tr>El volumen de la esfera es " + ((4 / 3) * Math.PI * Math.pow(radius.value, 3)).toFixed(3) + "cm3</tr></td>";
  //Reseteamos si el input queda vacío
  if (radius.value.length == 0) {
    res2.innerHTML = "";
  }
}
