// import React from 'react';
import './App.css';
import { useState } from 'react';
import Cena from './Cena';

function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178
    },
    {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169
    },
    {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81
    },
    {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126
    },
    {
      nombre: "Recesvinto",
      color: "brown",
      precio: 142
    },
  ]

  const [total, setTotal] = useState(0);
  return (
    <>
      <h1>Total a pagar: {total}€</h1>
      <div className='caja'>
        <Cena nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} setTotal={setTotal}></Cena>
        <Cena nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} setTotal={setTotal}></Cena>
        <Cena nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} setTotal={setTotal}></Cena>
        <Cena nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} setTotal={setTotal}></Cena>
        <Cena nombre={reyes[4].nombre} color={reyes[4].color} precio={reyes[3].precio} setTotal={setTotal}></Cena>
      </div>

    </>
  )
}

export default App

