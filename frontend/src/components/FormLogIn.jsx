import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
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
                    .required('The identity number is required')
                    .matches(/^\d+$/, 'The identity number must contain only digits')
                    .length(13, 'The identity number must be exactly 13 characters'),
            })}
            onSubmit={async (values, actions) => {
                actions.setSubmitting(false)
                dispatch(setLogIn(false))

            }}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <label
                        htmlFor='noId'
                        className='text-sm font-bold text-white '>
                        The identity number
                    </label>
                    <Field
                        name='noId'
                        placeholder='Enter your identity number'
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
                        {isSubmitting ? (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />) : 'Enter to system'}
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