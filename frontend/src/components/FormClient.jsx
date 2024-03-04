
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { createClient } from '../api/client.api'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';

const FormClient = ({dispatch, setSignUp, configToast}) => {
  return (
    <Formik
                    initialValues={
                        {
                            noId: '',
                            name: '',
                            address: '',
                            phoneNumber: '',
                            typeClient:[],
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
                        phoneNumber: Yup.number()
                            .min(10000000)
                            .max(99999999)
                            .required("El celular es requerido"),
                        typeClient: Yup.array().of(Yup.string()).min(1)
                    })}
                    onSubmit={async (values, actions) => {
                        try {
                            const res = await createClient(values)
                            toast.success(res.data.message, configToast);
                            
                        } catch (error) {
                            toast.error(error.response.data.message, configToast);
                        }
                        actions.setSubmitting(false)
                        dispatch(setSignUp(false))

                    }}
                >
                    {({ handleSubmit, isSubmitting }) => (
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
          text-white w-full mb-2'
                            />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="noId" />
                            
                            <label
                                htmlFor='name'
                                className='text-sm font-bold text-white '>
                                Nombre Completo
                            </label>
                            <Field
                                name='name'
                                placeholder='Ingrese su nombre completo'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600
          text-white w-full mb-2'
                            />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="name" />
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
          text-white w-full mb-2'
                                row={2}
                            />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="address" />
                            
                            <label
                                htmlFor='phoneNumber'
                                className='text-sm font-bold text-white '>
                                Numero de celular
                            </label>
                            <Field
                                name='phoneNumber'
                                placeholder='Ingrese su numero de celular'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600
          text-white w-full mb-2'
                            />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="phoneNumber" />
                            
                            <label
                            htmlFor='typeClient'
                            className='text-sm font-bold text-white '>
                                Tipo de cliente
                            </label>
                            <div role="group" aria-labelledby="checkbox-group" className='flex gap-4 mt-2'>
                                <label className='flex gap-2'>
                                    <Field type="checkbox" name="typeClient" value="Vendedor" className='w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600' />
                                    <span className='text-sm font-bold text-white '>Vendedor</span>
                                </label>
                                <label className='flex gap-2'>
                                    <Field type="checkbox" name="typeClient" value="Comprador" className='w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'/>
                                    <span className='text-sm font-bold text-white '>Comprador</span>
                                </label>
                            </div>
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="typeClient" />
                            <button
                            type='submit'
                            className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded 
                            mt-2 text-white focus:outline-none disabled:bg-indigo-400  w-full' 
                            disabled={isSubmitting}
                            >
                                {isSubmitting ? (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/>) : 'Agregar un nuevo cliente'}
                            </button>
                        </Form>
                    )}
                </Formik>
  )
}

FormClient.propTypes = {
    dispatch: PropTypes.func.isRequired,
    setSignUp: PropTypes.func.isRequired,
    configToast: PropTypes.object.isRequired
}

export default FormClient