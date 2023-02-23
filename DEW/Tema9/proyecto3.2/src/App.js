import "./App.css";
import {useState} from 'react';

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  const [cantidad, setCantidad] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);
  const [resultado4, setResultado4] = useState(0);

  const modificar=(e)=>{
    setCantidad(e.target.value);
    setResultado1(e.target.value*cambios[1].cambio);
    setResultado2(e.target.value*cambios[2].cambio);
    setResultado3(e.target.value*cambios[3].cambio);
    setResultado4(e.target.value*cambios[4].cambio);
  }

  return (
    <>
        <label htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u0" type="number" value={cantidad} onChange={modificar}/> 
        <label htmlFor="u1">{cambios[1].moneda}</label>
        <input id="u1" type="number" value={resultado1} readOnly/> 
        <label htmlFor="u2">{cambios[2].moneda}</label>
        <input id="u2" type="number" value={resultado2} readOnly/> 
        <label htmlFor="u3">{cambios[3].moneda}</label>
        <input id="u3" type="number" value={resultado3} readOnly/> 
        <label htmlFor="u4">{cambios[4].moneda}</label>
        <input id="u4" type="number" value={resultado4} readOnly/> 
    </>
  )
}

export default App;