//Variables
let lista =
  "Cliente;Localidad;Cuota<br>Laura;Santander;50<br>Álvaro;Castro;50<br>Igor;Castro;60<br>Ivan;Santander;40<br>Mónica;Zamora;30<br>Javi;Bilbao;30<br>David;Bilbao;50<br>José Luis;Bilbao;60";
let listaBuena = lista.split("<br>");
let provincia = document.getElementById("provincia");
let cuota = document.getElementById("datosCuota");

function mostrarUsuarios() {
  let muestraUsu = document.getElementById("usuarios");

  muestraUsu.innerHTML = "<table>";
  muestraUsu.innerHTML += "<tr><th>Listado de Clientes</th></tr>";

  for (let index = 1; index < listaBuena.length; index++) {
    muestraUsu.innerHTML += "<tr><td>" + listaBuena[index].split(";")[0] + "</td></tr>";
  }
  muestraUsu.innerHTML += "</table>";
}

provincia.addEventListener("input", muestraDatos);

function muestraDatos() {
  let muestraDatos = document.getElementById("datosProv");
  muestraDatos.innerHTML = "<tr><th colspan=2>Datos de la provincia "+provincia.value+"</th></tr>";
  for (let index = 1; index < listaBuena.length; index++) {
    if (listaBuena[index].split(";")[1] == provincia.value) {
        muestraDatos.innerHTML += "<tr><td>"+listaBuena[index].split(";")[0]+"</td><td>" + listaBuena[index].split(";")[2]+"</td></tr>";
    }
  }
}


cuota.addEventListener("input", muestraCuotas);

function muestraCuotas() {
  let muestraDatos = document.getElementById("tablaCuota");
  muestraDatos.innerHTML = "<tr><th colspan=2>Datos inferiores a "+cuota.value+"</th></tr>";
  for (let index = 1; index < listaBuena.length; index++) {
    if (listaBuena[index].split(";")[2] < cuota.value) {
        muestraDatos.innerHTML += "<tr><td>"+listaBuena[index].split(";")[0]+"</td><td>" + listaBuena[index].split(";")[1]+"</td></tr>";
    }
  }
}
