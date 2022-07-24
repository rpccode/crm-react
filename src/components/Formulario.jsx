import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import nuevoClienteSchema from '../schemas/nuevoClienteSchema';
import Spinner from './Spinner';
const Formulario = ({ cliente, cargando }) => {
    const navigate = useNavigate();
    const handleSumit = async (valores) => {
        try {
            let respuesta;
            if(cliente.id){
                const url = `${import.meta.env.VITE_API_URL}/${cliente.id}`;
                 respuesta = await fetch(url, {
                    method: 'put',
                    body: JSON.stringify(valores),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
    
                
            }else{
            const url = import.meta.env.VITE_API_URL;
             respuesta = await fetch(url, {
                method: 'post',
                body: JSON.stringify(valores),
                headers: {
                    "Content-Type": 'application/json'
                }
            })

            
            }
             await respuesta.json();
                navigate('/clientes');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        cargando ? <Spinner/> : (
            <div className='bg-gray-100 mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
                <h1 className='text-blue-600 font-bold text-3xs uppercase text-center' >{cliente.nombre ? 'Editar ' : 'Nuevo '} Cliente</h1>
                <Formik
                    initialValues={{
                        nombre: cliente?.nombre ?? "",
                        empresa: cliente?.empresa ?? "",
                        email: cliente?.email ?? "",
                        telefono: cliente?.telefono ?? "",
                        notas: cliente?.notas ?? ""

                    }}
                    enableReinitialize={true}
                    onSubmit={async (values, { resetForm }) => {
                        await handleSumit(values);

                        resetForm();
                    }}
                    validationSchema={nuevoClienteSchema}

                >
                    {({ errors }) => {

                        return (
                            <Form
                                className='mt-10'
                            >
                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='nombre'
                                    >Nombre:</label>
                                    <Field
                                        id='nombre'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-gray-50'
                                        placeholder='Nombre del Cliente'
                                        name='nombre'
                                    />
                                    <ErrorMessage name='nombre' component='div' className='text-center my-1
                                 text-red-600 text-sm font-bold p-2 uppercase' />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='empresa'
                                    >Empresa:</label>
                                    <Field
                                        id='empresa'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-gray-50'
                                        placeholder='Empresa del Cliente'
                                        name='empresa'

                                    />
                                    <ErrorMessage name='empresa' component='div' className='text-center my-1
                                 text-red-600 text-sm font-bold p-2 uppercase' />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='email'
                                    >Email:</label>
                                    <Field
                                        id='email'
                                        type='email'
                                        className='mt-2 block w-full p-3 bg-gray-50'
                                        placeholder='E-mail del Cliente'
                                        name='email'

                                    />
                                    <ErrorMessage name='email' component='div' className='text-center my-1
                                 text-red-600 text-sm font-bold p-2 uppercase' />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='telefono'
                                    >Telefono:</label>
                                    <Field
                                        id='telefono'
                                        type='tel'
                                        className='mt-2 block w-full p-3 bg-gray-50'
                                        placeholder='Telefono del Cliente'
                                        name='telefono'

                                    />
                                    <ErrorMessage name='telefono' component='div' className='text-center my-1
                                 text-red-600 text-sm font-bold p-2 uppercase' />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='notas'
                                    >Notas:</label>
                                    <Field
                                        as='textarea'
                                        id='notas'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-gray-50 h-40'
                                        placeholder='notas del Cliente'
                                        name='notas'

                                    />
                                    <ErrorMessage name='notas' component='div' className='text-center my-1
                                 text-red-600 text-sm font-bold p-2 uppercase' />
                                </div>
                                <input type="submit"
                                    className='mt-5 w-full bg-blue-800 p-3 rounded-md text-white uppercase font-bold hover:bg-blue-700 cursor-pointer text-lg'
                                    value={cliente.nombre ? 'Guardar' : 'Agregar Cliente'}
                                />
                            </Form>
                        )


                    }

                    }

                </Formik>
            </div>
        )
    )
}

Formulario.defaultProps = {
    cliente: {},
    cargando: false
}

export default Formulario