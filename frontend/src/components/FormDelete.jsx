import PropTypes from 'prop-types'
import { deleteAgent } from '../api/agent.api'
import { toast } from 'react-toastify';
import { fetchGetAgents } from '../store/slice/tdRender';
import { setFormDelete } from '../store/slice/formRender';

const FormDelete = ({ dispatch, values, configToast }) => {
    return (
        <div className=' max-w-xs'>
            <p className='text-sm font-bold text-white '>Are you sure to delete the {values.title}?</p>
            <button
                onClick={async() => {
                    try {
                        const { title } = values
                        let res;
                        switch (title) {
                            case 'Agents':
                                console.log(values)
                                res = await deleteAgent(values)
                                dispatch(fetchGetAgents())
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