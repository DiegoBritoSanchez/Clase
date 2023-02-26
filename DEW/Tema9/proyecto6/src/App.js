import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [chiste, setChiste] = useState();
  const otro = () => {
    const url = "https://api.chucknorris.io/jokes/random";
    // const url = "https://api.icndb.com/jokes/random";
    const peticion = fetch(url);
    peticion
      .then(datos => datos.json())
      .then(lectura => {
        setChiste(lectura.value);
        console.log(lectura);
      })
      .catch(() => console.log("Se ha producido un error"))
  }
  useEffect(() => {
    otro();
  }, [])


  return (
    <>
      {chiste}
      <button onClick={otro}>Otro chiste</button>
    </>
  );
}

export default App;
