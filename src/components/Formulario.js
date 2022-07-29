import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
  //crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  //Funcion que se ejecuta cuando el usuario escribe en el input

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el Usuario presiona Agregar Cita
  const submitCita = (e) => {
    e.preventDefault();

    //validar
    if (mascota.trim() === '' || propietario.trim() === '' ||fecha.trim() === '' ||hora.trim() === '' ||sintomas.trim() === '' ) {
      actualizarError(true)
      return;
    }
    //Eliminar el mensaje previo
    actualizarError(false)
    //Asignar Id
    cita.id=uuidv4();

    //Crear la cita
    crearCita(cita)
    //reiniciar el Formulario
    actualizarCita({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
    })
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? <p className="alerta-error">Rellene todos los Campos</p> : null}
      <form onSubmit={submitCita}>
        <label>Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Propietaro</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del Dueño"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha de Ingreso</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora de Ingreso</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agergar la Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;


