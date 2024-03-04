import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { createClient } from '../api/auth.api'
import PropTypes from 'prop-types'

const FormLogIn = ({dispatch, setLogIn}) => {
    return (
        <Formik
            initialValues={
                {
                    noId: '',
                }
            }
            enableReinitialize
            validationSchema={Yup.object({
                noId: Yup.string()
                    .required('El número de identidad es requerido')
                    .matches(/^\d+$/, 'El número de identidad debe contener solo dígitos')
                    .length(13, 'El número de identidad debe tener exactamente 13 caracteres'),
            })}
            onSubmit={async (values, actions) => {
                try {
                    await createClient(values)
                } catch (error) {
                    console.error(error)
                }
                actions.setSubmitting(false)
                dispatch(setLogIn(false))

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

                    <button
                        type='submit'
                        className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded 
                            mt-2 text-white focus:outline-none disabled:bg-indigo-400  w-full'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />) : 'Ingresar al sistema'}
                    </button>
                </Form>
            )}
        </Formik>
    )
}
FormLogIn.propTypes = {
    dispatch: PropTypes.func.isRequired,
    setLogIn: PropTypes.func.isRequired
}

export default FormLogIn