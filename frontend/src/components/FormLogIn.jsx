import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { getUser } from '../api/logIn.api'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { updateCurrentUser } from '../store/slice/userSlice'

const FormLogIn = ({dispatch, setLogIn, configToast}) => {
    const navigate = useNavigate()
    return (
        <Formik
            initialValues={
                {
                    username: '',
                    password: ''
                }
            }
            enableReinitialize
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('The username is required'),
                password: Yup.string()
                    .required('The password is required')
            })}
            onSubmit={async (values, actions) => {
                actions.setSubmitting(false)
                dispatch(setLogIn(false))
                try {
                    const res = await getUser(values);
                    if(res.data.data.isadmin){
                        dispatch(updateCurrentUser(res.data.data))
                        navigate('/admin')
                        return
                    }
                } catch (error) {
                    toast.error(error.response.data.message, configToast);
                }

            }}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className=' max-w-sm'>
                    <label
                        htmlFor='username'
                        className='text-sm font-bold text-white '>
                        Username
                    </label>
                    <Field
                        name='username'
                        placeholder='Enter your username'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
          text-white w-full mb-2'
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="username" />
                    <label
                        htmlFor='password'
                        className='text-sm font-bold text-white '>
                        Password
                    </label>
                    <Field
                        name='password'
                        placeholder='Enter your password'
                        type='password'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
          text-white w-full mb-2'
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="password" />
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
    setLogIn: PropTypes.func.isRequired,
    configToast: PropTypes.object.isRequired
}

export default FormLogIn