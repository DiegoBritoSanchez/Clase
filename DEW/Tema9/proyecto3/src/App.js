import "./App.css";
import { useState } from 'react';

const App = () => {
  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    }, {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    }, {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]

  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState();

  const cambio = () => {
    setContador(contador + 1);
    setMensaje(<h2>La afición principal de <span className="rojo">{reyesGodos[contador].nombre}</span> es <span className="verde">
      {reyesGodos[contador].aficion}</span></h2>);
    if (contador+1>=reyesGodos.length) {
      setContador(0);
    }
  }

  return (
    <>
      <button onClick={cambio}>Ver siguiente</button>
      <div>{mensaje}</div>
    </>
  )
}
export default App;