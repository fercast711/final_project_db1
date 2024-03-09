
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import { setFormBuyer, setFormSeller } from '../store/slice/formRender';

const FormSellProp = ({ dispatch, configToast, initialValues }) => {
    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={Yup.object({
                identitynumber: Yup.string()
                    .required('The identity number is required')
                    .matches(/^\d+$/, 'The identity number must contain only digits')
                    .length(13, 'The identity number must be exactly 13 characters'),
                name: Yup.string()
                    .required("The name is required"),
                address: Yup.string()
                    .required("The address is required"),
                phonenumber: Yup.number()
                    .min(10000000)
                    .max(99999999)
                    .required("The phone number is required"),
            })}
            onSubmit={async (values, actions) => {
                try {
                    // toast.success(res.data.message, configToast);

                } catch (error) {
                    toast.error(error.response.data.message, configToast);
                }
                actions.setSubmitting(false)
                dispatch(setFormSeller(false))
                dispatch(setFormBuyer(false))
            }}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <label
                        htmlFor='identitynumber'
                        className='text-sm font-bold text-white '>
                        The identity number
                    </label>
                    <Field
                        name='identitynumber'
                        placeholder='Enter your identity number'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
text-white w-full mb-2'
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="identitynumber" />

                    <label
                        htmlFor='name'
                        className='text-sm font-bold text-white '>
                        Name
                    </label>
                    <Field
                        name='name'
                        placeholder='Enter your full name'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
text-white w-full mb-2'
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="name" />
                    <label
                        htmlFor='address'
                        className='text-sm font-bold text-white '>
                        Address
                    </label>
                    <Field
                        name='address'
                        component='textarea'
                        placeholder='Enter your address'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
text-white w-full mb-2'
                        row={2}
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="address" />

                    <label
                        htmlFor='phonenumber'
                        className='text-sm font-bold text-white '>
                        Phone Number
                    </label>
                    <Field
                        name='phonenumber'
                        placeholder='Enter your phone number'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
text-white w-full mb-2'
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="phonenumber" />

                    <button
                        type='submit'
                        className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded
                            mt-2 text-white focus:outline-none disabled:bg-indigo-400  w-full'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />) : 'Add new client'}
                    </button>
                </Form>
            )}
        </Formik>
    )
}

FormSellProp.propTypes = {
    dispatch: PropTypes.func.isRequired,
    configToast: PropTypes.object.isRequired,
    initialValues: PropTypes.object.isRequired
}


export default FormSellProp