import PropTypes from 'prop-types'
import { FaCity, FaBed, FaDollarSign, FaMobileAlt, FaUserTie, FaHandHoldingUsd } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import { BiTrendingUp } from 'react-icons/bi';
import { HiOfficeBuilding } from 'react-icons/hi';
import { IoMdCash } from 'react-icons/io';

const Card = ({ data }) => {
    return (
        <div className="max-w-sm rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="rounded-t-lg" src={data.image} alt="" />

            <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{data.name}</h5>
                <p className="mb-3 font-normal  text-gray-400"><span className="  font-bold  text-white mb-3">Features:</span> {data.features}</p>
                <p className="mb-3 font-normal  text-gray-400"><span className="  font-bold  text-white mb-3">Address:</span> {data.address}</p>
                {(data.agentname && data.agentnumber) && (
                    <>
                        <p className="  font-bold  text-white mb-3">Contact to agent</p>
                        <div className='flex items-center gap-11 mb-3'>
                            <div className='flex items-center gap-2'>
                                <p className='font-normal  text-gray-400'>{<FaUserTie />}</p> <p className=" font-normal  text-gray-400">{data.agentname}</p>

                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='font-normal  text-gray-400'>{<HiOfficeBuilding />}</p> <p className=" font-normal  text-gray-400">{data.agentnumber}</p>

                            </div>
                        </div>
                    </>

                )}
                <p className="  font-bold  text-white mb-3">General Information</p>
                <div className='flex gap-10 mb-3'>
                    <div className='flex items-center gap-2'>
                        <p className='font-normal  text-gray-400'>{<FaCity />}</p> <p className=" font-normal  text-gray-400">{data.city}</p>
                    </div >
                    <div className='flex items-center gap-2'>
                        <p className='font-normal  text-gray-400'>{<FaBed />}</p><p className=" font-normal  text-gray-400">{data.bedroomcount}</p>

                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='font-normal  text-gray-400'>{<FaMobileAlt />}</p> <p className=" font-normal  text-gray-400">{data.phonenumber}</p>

                    </div>
                </div>
                <div className='flex gap-4 mb-3'>
                    <div className='flex items-center gap-2 mb-3'>
                        <p className='font-normal  text-gray-400'>{<FaDollarSign />}</p> <p className=" font-normal  text-gray-400">{data.price}</p>

                    </div>
                    {
                        (data.saleprice && data.salecommission) && (
                            <>
                                <div className='flex items-center gap-2 mb-3'>
                                    <p className='font-normal  text-gray-400'>{<FaHandHoldingUsd />}</p> <p className=" font-normal  text-gray-400">{data.saleprice}</p>

                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <p className='font-normal  text-gray-400'>{<BiTrendingUp />}</p> <p className=" font-normal  text-gray-400">{data.salecommission}</p>

                                </div>
                            </>

                        )
                    }
                </div>
                <div className='flex gap-10 mb-3'>
                    <div className='flex items-center gap-2 mb-3'>
                        <p className='font-normal  text-gray-400'>{<BsCalendar />}</p><p className=" font-normal  text-gray-400">{data.publicationdate}</p>
                    </div>
                    {
                        data.saledate && (
                            <div className='flex items-center gap-2 mb-3'>
                                <p className='font-normal  text-gray-400'>{<IoMdCash />}</p><p className=" font-normal  text-gray-400">{data.saledate}</p>
                            </div>
                        )
                    }
                </div>




            </div>
        </div>
    )
}
Card.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Card