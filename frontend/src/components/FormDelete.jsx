import PropTypes from 'prop-types'
import { deleteAgent } from '../api/agent.api'
import { toast } from 'react-toastify';
import { fetchGetAgents, fetchGetBuyers, fetchGetPropsMarket, fetchGetSellers, fetchGetSoldProps } from '../store/slice/tdRender';
import { setFormDelete } from '../store/slice/formRender';
import { deleteSeller } from '../api/seller.api';
import { deleteBuyer } from '../api/buyer.api';
import { deletePOM } from '../api/propMarket.api';
import { deleteSP } from '../api/soldProp.api';

const FormDelete = ({ dispatch, values, configToast }) => {
    return (
        <div className=' max-w-xs'>
            <p className='text-sm font-bold text-white '>Are you sure to delete the {values.title}?</p>
            <button
                onClick={async () => {
                    try {
                        const { title } = values
                        let res;
                        switch (title) {
                            case 'Agents':
                                res = await deleteAgent(values)
                                dispatch(fetchGetAgents())
                                break;
                            case 'Sellers':
                                res = await deleteSeller(values)
                                dispatch(fetchGetSellers())
                                break;
                            case 'Buyers':
                                res = await deleteBuyer(values)
                                dispatch(fetchGetBuyers())
                                break;
                            case 'Properties On The Market':
                                res = await deletePOM(values)
                                dispatch(fetchGetPropsMarket())
                                break;
                            case 'Sold Properties':
                                res = await deleteSP(values)
                                dispatch(fetchGetSoldProps())
                                break;
                            default:
                                break;
                        }
                        toast.success(res.data.message, configToast);
                    } catch (error) {
                        toast.error(error.response.data.message, configToast);
                    }
                    dispatch(setFormDelete(false))

                }}
                className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400  w-full'>Accept</button>
        </div>
    )
}

FormDelete.propTypes = {
    dispatch: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    configToast: PropTypes.object.isRequired,
}

export default FormDelete