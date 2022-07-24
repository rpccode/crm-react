import { useParams} from 'react-router-dom'
import { useState , useEffect} from 'react'
import Formulario from '../components/Formulario'

const EditarCliente = () => {
    const [cliente, setcliente] = useState({});
    const {id} = useParams();
    const [cargando, setcargando] = useState(true);
    useEffect(() => {
        
        
        const obtenerClientesApi= async () => {
            try {
                const url = `http://localhost:4000/Clientes/${id}`
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
    <>
    <h1 className='text-3xl font-black text-blue-700'>Editar Cliente</h1>
      <p className='mt-3'>Utiliza este Formulario para Editar Datos del  <span className='text-blue-700'>Cliente</span></p>
    
     {cliente?.nombre ? (
        <Formulario
        cliente={cliente} 
        cargando={cargando}
      />
     ) : <p>Cliente id No Valido</p>}
</>
  )
}

export default EditarCliente