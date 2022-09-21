const saludar = () => {
  alert("Saludo de ejemplo");
};
const comensales = () => {
  let comensal;
  while (isNaN(comensal)) {
    comensal = window.prompt("¿Cuántos comensales van a ser?");
    comensal = comensal <= 0 ? 0 / 0 : comensal;
    document.getElementById("comensalesL").innerHTML = comensal + " comensales";
    if (comensal >= 2) {
      document.getElementById("kg").innerHTML = (comensal * 500) / 1000 + " kg";
    }
  }
};
const fondo = () => {
  const months = ["darkblue", "coral", "darkgoldenrod", "chocolate"];
  const random = Math.floor(Math.random() * months.length);
  document.body.style.backgroundColor = months[random];
};

