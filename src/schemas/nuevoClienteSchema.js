import * as yup from 'yup'; 

const nuevoClienteSchema = yup.object().shape({
    nombre: yup.string()
               .min(3,'El Nombre es muy corto')
               .max(20,'El Nombre es muy Largo')
               .required('El Nombre del Cliente es Obligatorio'),
    empresa: yup.string()
                .required('El Nombre de la Empresa es Obligatorio'),
    email: yup.string()
                .email('E-Mail no Valido')
                .required('El E-Mail es Obligatorio')
                ,
    telefono: yup.number()
                .integer('El Numero no Es valido')
                .positive('El Numero no Es valido')
                .typeError('El Numero no Es valido'),
                    nota: ''

    
})


export default nuevoClienteSchema;