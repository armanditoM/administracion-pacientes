import React, {Fragment,useEffect,useState} from 'react'
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {
  //Citas En Local Storerage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales=[]
  }

  //Arreglo de citas
  const[citas,guardarCitas]=useState(citasIniciales);
  //useEffect
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    } else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  }, [citas])


  //Arreglo de citas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]

    )
  }
  //agrega funcion para eliminar cita
  const eliminaCita=id =>{
    const nuevasCitas=citas.filter(cita=>cita.id !==id)
    guardarCitas(nuevasCitas)
  }
  //
  const titulo = citas.length === 0 ? 'No hay citas': 'Administra tus citas'

  return (
      <Fragment>
      <h2>Administrador de Pacientes</h2>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario 
            crearCita={crearCita}
            />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita=>(
              <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita={eliminaCita}
              />
            ))}
          </div>
        </div>
      </div> 
      </Fragment>
     
  )
}

export default App;
