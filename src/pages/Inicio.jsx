import React from 'react'
import ListadoClientes from '../components/ListadoClientes'

const Inicio = () => {
  return (
    <>
        <h1 className='text-3xl font-black text-blue-700'>Clientes</h1>
          <p className='mt-3'>Administra tus <span className='text-blue-700'>Clientes</span></p>
                  
            

         <ListadoClientes/>
    
    </>
  )
}

export default Inicio 