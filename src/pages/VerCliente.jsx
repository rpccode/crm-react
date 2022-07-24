import { useParams} from 'react-router-dom'
import { useState , useEffect} from 'react'
import Spinner from '../components/Spinner'

const VerCliente = () => {
    const [cliente, setcliente] = useState({});
    const {id} = useParams();
    const [cargando, setcargando] = useState(true);
    
    useEffect(() => {
        
        
        const obtenerClientesApi= async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setcliente(resultado);
            } catch (error) {
                console.log(error);   
            }
            setTimeout(() => {
                setcargando(!cargando);
            }, 1000);
        };
 
        obtenerClientesApi();
    }, []);


  return (
    cargando ? <Spinner/> :   
    Object.keys(cliente).length === 0 ? <p className='text-3xl text-blue-700' >No Hay Resultados</p>:(
        <div>
          <h1 className='text-3xl font-black text-blue-700'>Ver Cliente: <span className='text-gray-700 font-bold text-2xl'>{cliente.nombre}</span></h1>
          <p className='mt-3'>Informacion del <span className='text-blue-700'>Cliente</span></p>
        
             
            <div className=' w-3/4 m-auto mt-4  shadow-lg rounded-lg text-center p-5'>
            
            {cliente.nombre && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-blue-800 font-bold uppercase'>Nombre: </span>
                    {cliente.nombre}
            
                </p>
            )}
            {cliente.email && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-blue-800 font-bold uppercase'>E-Mail: </span>
                    {cliente.email}
            
                </p>
            )}
            {cliente.empresa && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-blue-800 font-bold uppercase'>Empresa: </span>
                    {cliente.empresa}
            
                </p>
            )}
            {cliente.telefono && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-blue-800 font-bold uppercase'>Telefono: </span>
                    {cliente.telefono}
            
                </p>
            )}
            {cliente.notas && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-blue-800 font-bold uppercase'>Notas: </span>
                    {cliente.notas}
            
                </p>
            )}
        </div>


        
        
    </div>
            )
            
  )
}

export default VerCliente