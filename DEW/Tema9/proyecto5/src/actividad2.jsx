import React from 'react'

function actividad2({ reyes }) {
    const eliminar = (e) => {
        e.target.parentNode.remove();
    }
    return (
        <>
            {reyes.filter(e => !e.nombre.includes("g")).map(e => <div key={e.nombre}>
                {e.nombre} <button onClick={eliminar}>Eliminar</button>
            </div>)}
        </>
    )
}

export default actividad2
