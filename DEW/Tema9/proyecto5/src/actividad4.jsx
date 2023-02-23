import React from 'react'

function actividad4({ reyes }) {
    const sumar = (e) => {
        ++e.target.innerHTML;
    }
    const resultado = reyes.filter(e => e.reinado > 10 && e.vacasComidas > 10).
        map(e => <div key={e.nombre}>
            {e.nombre}<div className='numero' onClick={sumar}>0</div>
        </div>);

    return (
        <>
            {resultado}
        </>
    )
}

export default actividad4
