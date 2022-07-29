import React from 'react';

const Cita =({cita,eliminarCita})=>(
    <div className='cita'>
        <p>Mascota <span>{cita.mascota}</span></p>
        <p>Propietaro <span>{cita.propietario}</span></p>
        <p>Fecha <span></span>{cita.fecha}</p>
        <p>Hora <span></span>{cita.hora}</p>
        <p>Sintomas <span>{cita.sintomas}</span></p>
        <button className='button eliminar u-full width'
        onClick={()=> eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
)
export default Cita;
