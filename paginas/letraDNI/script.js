const letraDNI = () => {
  let numero;
  let letra;
  let letraValida = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  let aux = true;
  do {
    do {
      numero = window.prompt("Introduzca el número de su DNI");
      console.log(numero);
    } while (numero < 0 || numero > 99999999);
    do {
        letra = window.prompt("Introduzca la letra de su DNI");
        letra = letra.toUpperCase();
        if (letra === letraValida[(numero % 23)]) {
            aux = false
        }
    } while (aux);
    alert("Su DNI es "+ numero+letra+ " y lo ha introducido correctamente.")
    aux = false;
  } while (aux);
};
