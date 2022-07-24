import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
        <h1 className='text-3xl font-black text-blue-700'>Nuevo Cliente</h1>
          <p className='mt-3'>Llene los siguientes Campos para Registrar un <span className='text-blue-700'>Cliente</span></p>
        <Formulario/>
    </>
  )
}

export default NuevoCliente