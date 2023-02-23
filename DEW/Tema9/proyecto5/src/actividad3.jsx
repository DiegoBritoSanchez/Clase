import React from 'react'

function actividad3({ reyes }) {
    const resultado = reyes.find(e => e.nombre.substring(0, 1) == "e" || e.nombre.substring(0, 1) == "E");
    return (
        <>
            {resultado !== undefined ? resultado.nombre : "No se ha encontrado"};
        </>
    )
}

export default actividad3
