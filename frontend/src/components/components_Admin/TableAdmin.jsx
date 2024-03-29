import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { setFormAgent, setFormAgentIntialData, setFormBuyer, setFormClientInitialData, setFormDelete, setFormDeleteData, setFormPropMarket, setFormPropMarketData, setFormSellProp, setFormSellPropData, setFormSeller, setFormSoldProp, setFormSoldPropData, setImage, setImageUrl } from '../../store/slice/formRender'
import { useEffect } from 'react'
import { fetchGetAgentPerformance, fetchGetAgents, fetchGetBestSellingAgent, fetchGetBinnacle, fetchGetBuyerPurchases, fetchGetBuyers, fetchGetCitySales, fetchGetFeatureSales, fetchGetProperty_priceSales, fetchGetPropsMarket, fetchGetSalesxAgent, fetchGetSellerSales, fetchGetSellers, fetchGetSoldProps, setTdReports } from '../../store/slice/tdRender'

const TableAdmin = ({ componentTh, title, componentTd, isReport, needYear }) => {
    const { currentUser } = useSelector(state => state.user)
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
            case 'Properties On The Market':
                dispatch(fetchGetPropsMarket())
                break;
            case 'Sold Properties':
                dispatch(fetchGetSoldProps())
                break;
            case 'Amount of sales per agent':
                dispatch(fetchGetSalesxAgent())
                break;
            case 'Binnacle':
                dispatch(fetchGetBinnacle())
                break;
            case 'Amount of purchases per buyer':
                dispatch(fetchGetBuyerPurchases())
                break;
            case 'Sales per location':
                dispatch(fetchGetCitySales())
                break;
            case 'Amount of sales per seller':
                dispatch(fetchGetSellerSales())
                break;
            case 'Sales per feature':
                dispatch(fetchGetFeatureSales())
                break;
            case 'Sales per price':
                dispatch(fetchGetProperty_priceSales())
                break;
            default:
                break;
        }
        if(needYear){
            dispatch(setTdReports([]))
        }
    }, [dispatch])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 mx-20">
            <table className="w-full text-sm text-left rtl:text-right  text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right  text-white bg-gray-800">
                    <div className='flex justify-between'>
                        <span>{title}</span>
                        {
                            (title === 'Sold Properties') || isReport ? '' : (
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
                                            case 'Properties On The Market':
                                                dispatch(setFormPropMarket(true))
                                                dispatch(setFormPropMarketData({
                                                    name: '',
                                                    address: '',
                                                    city: '',
                                                    phonenumber: '',
                                                    bedroomcount: '',
                                                    features: '',
                                                    price: '',
                                                    agentidentitynumber: '',
                                                    selleridentitynumber: '',
                                                    publicationdate: ''
                                                }))
                                                break;
                                            default:
                                                break;
                                        }
                                    }}
                                    className='text-white focus:ring-4 bg-purple-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-purple-700 focus:outline-none focus:ring-purple-800'>
                                    Add new
                                </button>
                            )
                        }
                        {
                            (isReport && needYear) && (
                                <input
                                    onChange={(e) => {
                                        if (isNaN(e.target.value)) {
                                            return;
                                        }
                                        if(title === 'Agent who sold more properties in the year') dispatch(fetchGetBestSellingAgent(e.target.value))
                                        else dispatch(fetchGetAgentPerformance(e.target.value))
                                    }}
                                    className='px-3 py-2 focus:outline-none rounded bg-gray-600
                            text-white mb-2' />
                            )
                        }
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
                        {
                            !isReport && (
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            )
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        componentTd ? componentTd.map((tr, index) => (
                            <tr key={index} className=" border-b bg-gray-800 border-gray-700">
                                {
                                    Object.keys(tr).map((keyTd) => (
                                        <td key={keyTd} className="px-6 py-4">
                                            { keyTd === 'image' ? (
                                                <button 
                                                onClick={() => {
                                                    dispatch(setImageUrl(tr[keyTd]))
                                                    dispatch(setImage(true))
                                                }}
                                                className='text-white focus:ring-4  bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800'>
                                                    View
                                                </button>
                                            ): tr[keyTd] }
                                        </td>
                                    ))
                                }
                                {
                                    !isReport && (
                                        <td className="px-6 py-4 text-right flex justify-end items-center">
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
                                                        case 'Properties On The Market':
                                                            dispatch(setFormPropMarketData(tr))
                                                            dispatch(setFormPropMarket((true)))
                                                            break;
                                                        case 'Sold Properties':
                                                            dispatch(setFormSoldPropData(tr))
                                                            dispatch(setFormSoldProp((true)))
                                                            break;
                                                        default:
                                                            break;
                                                    }


                                                }}
                                                className='text-white focus:ring-4 bg-green-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-green-700 focus:outline-none focus:ring-green-800'>
                                                Edit
                                            </button>
                                            {
                                                title === 'Properties On The Market' ? (
                                                    <button
                                                        className='text-white focus:ring-4 bg-cyan-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-cyan-700 focus:outline-none focus:ring-cyan-800'
                                                        onClick={() => {
                                                            dispatch(setFormSellPropData(tr))
                                                            dispatch(setFormSellProp(true))
                                                        }}
                                                    >
                                                        Sell
                                                    </button>) : ''
                                            }

                                            <button
                                                onClick={() => {
                                                    dispatch(setFormDelete(true));
                                                    dispatch(setFormDeleteData({ title, ...tr, username: currentUser.username }))
                                                }}
                                                className='text-white focus:ring-4 bg-red-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-red-700 focus:outline-none focus:ring-red-800'>
                                                Delete
                                            </button>
                                        </td>
                                    )
                                }

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
    componentTd: PropTypes.array.isRequired,
    isReport: PropTypes.bool,
    needYear: PropTypes.bool
}

export default TableAdmin