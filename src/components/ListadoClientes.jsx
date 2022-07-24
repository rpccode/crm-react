
import { useState, useEffect } from 'react'
import Cliente from './Cliente';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';
// import 'bootstrap/dist/css/bootstrap.min.css'


const ListadoClientes = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-succes',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
    const [clientes, setclientes] = useState([]);
       const eliminarCliente = async () =>{
            try {
                
                const url =`http://localhost:4000/clientes/${id}`
                const  respuesta = await fetch(url, {
                    method: 'delete'
                })

                await respuesta.json()

            } catch (error) {
                console.log(error);
            }
     }
    useEffect(() => {

        const obtenerClientesApi = async () => {
            try {
                const url = 'http://localhost:4000/Clientes';
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setclientes(resultado);
            } catch (error) {
                console.log(error);
            }
        }

        obtenerClientesApi();
    }, []);

    const handleEliminar =  (id) =>{
      
          
          swalWithBootstrapButtons.fire({
            title: 'deseas Eliminar este cliente?',
            text: "No se Puede Revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
          }).then( async (result) => {
            if (result.isConfirmed) {
                
                try {
                
                    const url =`http://localhost:4000/clientes/${id}`
                    const  respuesta = await fetch(url, {
                        method: 'delete'
                    })

                    swalWithBootstrapButtons.fire(
                        'Eliminado!',
                        'El cliente a sido Eliminado.',
                        'success'
                      )
                    await respuesta.json()
                    
                    const arrayClientes = clientes.filter(cliente => cliente.id !== id)
                    setclientes(arrayClientes);
                } catch (error) {
                    console.log(error);
                }
              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Tu Archivo esta Seguro:)',
                'error'
              )
            }
          })
    }

    return (

        <>
            <div className="flex justify-between items-center  mt-3 bg-white ">
        <div>
            <Link to='/clientes/nuevo'  className="inline-flex items-center 
             text-blue-500 bg-white border border-blue-800 
             focus:outline-none hover:bg-gray-100 focus:ring-4
              focus:ring-gray-200 
              font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer
               " type="button">
                <span className="sr-only">Nuevo</span>
                Nuevo
                
            </Link>
            
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-blue-500 " 
                aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" 
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 
                1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" 
            className="block p-2 pl-10 w-80 text-sm text-blue-700
             bg-gray-50 rounded-lg border border-blue-800 focus:ring-blue-800
              focus:border-blue-800  placeholder:text-blue-500 " placeholder="Search for users"/>
        </div>
    </div>
    
            <table className='w-full mt-5 table-auto shadow  bg-white'>
             
                <thead className='bg-blue-600 text-white ' >
                    <tr>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Contacto</th>
                        <th className='p-2'>Empresa</th>
                        <th className='p-2'>Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <Cliente
                            key={cliente.id}
                            cliente={cliente}
                            handleEliminar={handleEliminar}
                        />
                    ))}
                </tbody>




            </table>

        </>



    )
}

export default ListadoClientes