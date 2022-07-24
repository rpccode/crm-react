import React from 'react'
import {Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    const urlActual = location.pathname;

    return (

    <div className='md:flex md:min-h-screen'>

        <div className='md:w-1/4 bg-blue-700 shadow-xl px-5 py-10'>
                <h2 className='text-white text-3xl font-black text-center'>CRM - Clientes</h2>
                <nav className='md:mt-10'>
                        <Link to="/clientes" className={`${urlActual === '/clientes' ? 'text-blue-500' : 'text-white'} 
                        text-2xl md:block mt-2 rounded-md hover:text-blue-500`}>
                            Clientes
                        </Link>
                        <Link to="/clientes/nuevo" className={`${urlActual === '/clientes/nuevo' ? 'text-blue-500' : 'text-white'} 
                        text-2xl block  mt-2 rounded-md hover:text-blue-500`}>
                            Nuevo Cliente
                        </Link>

                </nav>    
        </div>
        <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet/>
        </div>
        


    </div>
  )
}

export default Layout