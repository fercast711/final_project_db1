
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import { setFormSellProp } from '../store/slice/formRender';

const FormSellProp = ({ dispatch, configToast, initialValues }) => {
    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={Yup.object({
                buyeridentitynumber: Yup.string()
                    .required('The identity number is required')
                    .matches(/^\d+$/, 'The identity number must contain only digits')
                    .length(13, 'The identity number must be exactly 13 characters'),
                saleprice: Yup.number()
                    .required("The sale price is required"),
                salecommission: Yup.number()
                    .required("The Sale Commissionis required"),
            })}
            onSubmit={async (values, actions) => {
                try {
                    // toast.success(res.data.message, configToast);

                } catch (error) {
                    toast.error(error.response.data.message, configToast);
                }
                console.log(values)
                actions.setSubmitting(false)
                dispatch(setFormSellProp(false))
            }}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className=' max-w-md'>
                    <label
                        htmlFor='buyeridentitynumber'
                        className='text-sm font-bold text-white '>
                        Buyer Identity Number
                    </label>
                    <Field
                        name='buyeridentitynumber'
                        placeholder='Enter the identity number'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
text-white w-full mb-2'
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="buyeridentitynumber" />

                    <label
                        htmlFor='saleprice'
                        className='text-sm font-bold text-white '>
                        Sale Price
                    </label>
                    <Field
                        name='saleprice'
                        placeholder='Enter the sale price'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
text-white w-full mb-2'
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="saleprice" />

                    <label
                        htmlFor='salecommission'
                        className='text-sm font-bold text-white '>
                        Sale Commission
                    </label>
                    <Field
                        name='salecommission'
                        placeholder='Enter your phone number'
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600
text-white w-full mb-2'
                    />
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="salecommission" />

                    <button
                        type='submit'
                        className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded
                            mt-2 text-white focus:outline-none disabled:bg-indigo-400  w-full'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />) : 'Add as sold'}
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