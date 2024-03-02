import {MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setSignUp } from '../store/slice/authSlice'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const ModalSignUp = () => {
    const dispatch = useDispatch()
  return (
    <div className="fixed inset-0 overflow-y-auto min-h-screen flex items-center justify-center">
        <div className=" max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-end p-2'>
                <MdClose 
                onClick={() => {
                    dispatch(setSignUp(false));
                }} 
                className="h-5 w-5 hover:cursor-pointer text-white text-end font-bold"/>
            </div>
            <Formik
            initialValues={
                {
                    noId: '',
                    name: '',
                    address: '',
                    phoneNumber: '',
                }
            }
            enableReinitialize
            validationSchema={Yup.object({
                noId: Yup.string()
                  .required('El número de identidad es requerido')
                  .matches(/^\d+$/, 'El número de identidad debe contener solo dígitos')
                  .length(13, 'El número de identidad debe tener exactamente 13 caracteres'),
                name: Yup.string()
                  .required("El nombre es requerido"),
                address: Yup.string()
                  .required("La dirección es requerida"),
                phoneNumber: Yup.string()
                  .required("El celular es requerido")
                  .matches(/^\d+$/, 'El celular debe contener solo dígitos')
                  .length(8, 'El celular debe tener exactamente 8 dígitos'),
            })}
            >
                {({handleSubmit, isSubmitting})=>(
                    <Form onSubmit={handleSubmit}>
                        <label 
                        htmlFor='noId'
                        className='text-sm font-bold text-white '>
                            Numero de Identidad
                        </label>
                        <Field
                        name='noId'
                        placeholder='Ingrese su numero de Identidad'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
          text-white w-full mb-4'
                        />
                        <p></p>
                        <label 
                        htmlFor='name'
                        className='text-sm font-bold text-white '>
                            Nombre Completo
                        </label>
                        <Field
                        name='name'
                        placeholder='Ingrese su nombre completo'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
          text-white w-full mb-4'
                        />
                        <p></p>
                        <label 
                        htmlFor='address'
                        className='text-sm font-bold text-white '>
                            Direccion
                        </label>
                        <Field
                        name='address'
                        component='textarea'
                        placeholder='Ingrese su direccion'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
          text-white w-full mb-4'
                        row={3}
                        />
                        <p></p>
                        <label 
                        htmlFor='phoneNumber'
                        className='text-sm font-bold text-white '>
                            Numero de celular
                        </label>
                        <Field
                        name='phoneNumber'
                        placeholder='Ingrese su numero de celular'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
          text-white w-full mb-4'
                        row={3}
                        />
                        <div role="group" aria-labelledby="checkbox-group">
                            
                        </div>
                        
                    </Form>
                )}
            </Formik>
        </div>


    </div>
  )
}

export default ModalSignUp