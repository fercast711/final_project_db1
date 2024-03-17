import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import { setFormSoldProp } from '../store/slice/formRender';
import { updateSP } from '../api/soldProp.api';
import { fetchGetSoldProps } from '../store/slice/tdRender';
import { useSelector } from 'react-redux';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '../../firebase';

const FormSoldProp = ({ dispatch, configToast, initialValues }) => {
    const { currentUser } = useSelector(state => state.user)
    const uploadFirebase = (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, `${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
    
            uploadTask.on('state_changed', 
                () => {
                },
                (error) => {
                    toast.error(error.message, configToast);
                    reject(error); 
                },
                () => {
                    // Subida completada exitosamente
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            resolve(downloadURL); 
                        })
                        .catch((error) => {
                            reject(error); 
                        });
                }
            );
        });
    };
    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("The name is required"),
                address: Yup.string()
                    .required("The address is required"),
                city: Yup.string()
                    .required("The city is required"),
                phonenumber: Yup.number()
                    .min(10000000)
                    .max(99999999)
                    .required("The phone number is required"),
                bedroomcount: Yup.number()
                    .required("The bedroom count is required"),
                features: Yup.string()
                    .required("The features is required"),
                price: Yup.number()
                    .required("The price is required"),
                saleprice: Yup.number()
                    .required("The sale price is required"),
                agentidentitynumber: Yup.string()
                    .required('The identity number is required')
                    .matches(/^\d+$/, 'The identity number must contain only digits')
                    .length(13, 'The identity number must be exactly 13 characters'),
                selleridentitynumber: Yup.string()
                    .required('The identity number is required')
                    .matches(/^\d+$/, 'The identity number must contain only digits')
                    .length(13, 'The identity number must be exactly 13 characters'),
                buyeridentitynumber: Yup.string()
                    .required('The identity number is required')
                    .matches(/^\d+$/, 'The identity number must contain only digits')
                    .length(13, 'The identity number must be exactly 13 characters'),
                salecommission: Yup.number()
                    .required("The sale commission is required"),
                publicationdate: Yup.date()
                    .required("The publication date is required"),
                saledate: Yup.date()
                    .required("The sale date is required"),
                image: null
            })}
            onSubmit={async (values, actions) => {
                try {
                    if(values.image !== initialValues.image) {
                        values.image = await uploadFirebase(values.image);
                    }
                    const res = await updateSP({ ...values, username: currentUser.username })
                    toast.success(res.data.message, configToast);
                    dispatch(fetchGetSoldProps())
                } catch (error) {
                    toast.error(error.response.data.message, configToast);
                }
                actions.setSubmitting(false)
                dispatch(setFormSoldProp(false))
            }}
        >
            {({ handleSubmit, isSubmitting, setFieldValue }) => (
                <Form onSubmit={handleSubmit} className="flex flex-wrap min-w-full">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        {/* Columna 1 */}

                        <div className="mb-4">
                            <label htmlFor='name' className='block text-sm font-bold text-white'>
                                Name
                            </label>
                            <Field name='name' placeholder='Enter the name'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="name" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor='address' className='block text-sm font-bold text-white'>
                                Address
                            </label>
                            <Field name='address' component='textarea' placeholder='Enter the address'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' rows={2} />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="address" />
                        </div>


                        <div className="mb-4">
                            <label htmlFor='agentidentitynumber' className='block text-sm font-bold text-white'>
                                Agent Identity Number
                            </label>
                            <Field name='agentidentitynumber' placeholder='Enter the Agent Identity Number'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="agentidentitynumber" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='selleridentitynumber' className='block text-sm font-bold text-white'>
                                Seller Identity Number
                            </label>
                            <Field name='selleridentitynumber' placeholder='Enter the Seller Identity Number'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="selleridentitynumber" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='buyeridentitynumber' className='block text-sm font-bold text-white'>
                                Buyer Identity Number
                            </label>
                            <Field name='buyeridentitynumber' placeholder='Enter the Seller Identity Number'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="buyeridentitynumber" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-3">
                        <div className="mb-4">
                            <label htmlFor='phonenumber' className='block text-sm font-bold text-white'>
                                Phone Number
                            </label>
                            <Field name='phonenumber' placeholder='Enter the phone number'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="phonenumber" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor='features' className='block text-sm font-bold text-white'>
                                Features
                            </label>
                            <Field name='features' component='textarea' placeholder='Enter the features'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' rows={2} />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="features" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor='price' className='block text-sm font-bold text-white'>
                                Price
                            </label>
                            <Field name='price' placeholder='Enter the price'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="price" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='saleprice' className='block text-sm font-bold text-white'>
                                Sale Price
                            </label>
                            <Field name='saleprice' placeholder='Enter the price'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="saleprice" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='salecommission' className='block text-sm font-bold text-white'>
                                Sale Commission
                            </label>
                            <Field name='salecommission' placeholder='Enter the price'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="salecommission" />
                        </div>
                        
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                    <div className="mb-4">
                            <label htmlFor='city' className='block text-sm font-bold text-white'>
                                City
                            </label>
                            <Field name='city' placeholder='Enter the city'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="city" />
                        </div>
                        <div className="mb-11">
                            <label htmlFor='bedroomcount' className='block text-sm font-bold text-white'>
                                Bedroom Count
                            </label>
                            <Field name='bedroomcount' placeholder='Enter the bedroom count'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="bedroomcount" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='publicationdate' className='block text-sm font-bold text-white'>
                                Publication Date
                            </label>
                            <Field name='publicationdate' type='date'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="publicationdate" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='saledate' className='block text-sm font-bold text-white'>
                                Sale Date
                            </label>
                            <Field name='saledate' type='date'
                                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                            <ErrorMessage component="p" className="text-red-400 text-sm" name="saledate" />
                        </div>
                        <div className='mb-4'>
                        <label htmlFor='image' className='block text-sm font-bold text-white'>
                            Image
                        </label>
                        <input
                            onChange={(e) => {
                                setFieldValue('image', e.target.files[0]);
                            }}
                            type='file'
                            name='image'
                            className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
                        />
                        <ErrorMessage component="p" className="text-red-400 text-sm" name="image" />
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <button
                            type='submit'
                            className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400 w-full'
                            disabled={isSubmitting}>
                            {isSubmitting ? (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5 mx-auto" />) : 'Update sold property'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

FormSoldProp.propTypes = {
    dispatch: PropTypes.func.isRequired,
    configToast: PropTypes.object.isRequired,
    initialValues: PropTypes.object.isRequired
}
export default FormSoldProp