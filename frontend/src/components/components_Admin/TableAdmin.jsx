import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setFormAgent, setFormAgentIntialData, setFormBuyer, setFormClientInitialData, setFormSeller } from '../../store/slice/formRender'
import { useEffect } from 'react'
import { fetchGetAgents, fetchGetBuyers, fetchGetSellers } from '../../store/slice/tdRender'

const TableAdmin = ({ componentTh, title, componentTd }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        switch (title) {
            case 'Agents':
                dispatch(fetchGetAgents())
                break;
            case 'Sellers':
                dispatch(fetchGetSellers())
                break;
            case 'Buyers':
                dispatch(fetchGetBuyers())
                break;
            default:
                break;
        }
    }, [dispatch])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 mx-20">
            <table className="w-full text-sm text-left rtl:text-right  text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right  text-white bg-gray-800">
                    <div className='flex justify-between'>
                        <span>{title}</span>
                        <button
                            onClick={() => {
                                switch (title) {
                                    case 'Agents':
                                        dispatch(setFormAgent(true))
                                        dispatch(setFormAgentIntialData({
                                            identitynumber: '',
                                            name: '',
                                            address: '',
                                            phonenumber: '',
                                            officephone: '',
                                        }))
                                        break;
                                    case 'Sellers':
                                        dispatch(setFormSeller(true))
                                        dispatch(setFormClientInitialData({
                                            identitynumber: '',
                                            name: '',
                                            address: '',
                                            phonenumber: '',
                                        }))
                                        break;
                                    case 'Buyers':
                                        dispatch(setFormBuyer(true))
                                        dispatch(setFormClientInitialData({
                                            identitynumber: '',
                                            name: '',
                                            address: '',
                                            phonenumber: '',
                                        }))
                                        break;
                                    default:
                                        break;
                                }
                            }}
                            className='text-white focus:ring-4 bg-purple-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-purple-700 focus:outline-none focus:ring-purple-800'>
                            Add new
                        </button>
                    </div>

                </caption>



                <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                    <tr>
                        {
                            componentTh.map((tr, index) => (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {tr}
                                </th>
                            ))
                        }
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        componentTd ? componentTd.map((tr, index) => (
                            <tr key={index} className=" border-b bg-gray-800 border-gray-700">
                                {
                                    Object.keys(tr).map((keyTd) => (
                                        <td key={keyTd} className="px-6 py-4">
                                            {tr[keyTd]}
                                        </td>
                                    ))
                                }
                                <td className="px-6 py-4 text-right flex justify-end">
                                    <button
                                        onClick={() => {
                                            switch (title) {
                                                case 'Agents':
                                                    dispatch(setFormAgentIntialData(tr))
                                                    dispatch(setFormAgent((true)))
                                                    break;
                                                case 'Sellers':
                                                    dispatch(setFormClientInitialData(tr))
                                                    dispatch(setFormSeller((true)))
                                                    break;
                                                case 'Buyers':
                                                    dispatch(setFormClientInitialData(tr))
                                                    dispatch(setFormBuyer((true)))
                                                    break;
                                                default:
                                                    break;
                                            }


                                        }}
                                        className='text-white focus:ring-4 bg-green-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-green-700 focus:outline-none focus:ring-green-800'>
                                        Edit
                                    </button>
                                    <button className='text-white focus:ring-4 bg-red-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-red-700 focus:outline-none focus:ring-red-800'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )) : ''
                    }
                </tbody>
            </table>
        </div>
    )
}

TableAdmin.propTypes = {
    componentTh: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    componentTd: PropTypes.array.isRequired
}

export default TableAdmin