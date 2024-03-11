import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setAgent, setBuyer, setHome, setPropertiesMarket, setReports, setSeller, setSoldProperties } from "../store/slice/renderSlice"

const HeaderPages = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  return (
    <header>
    <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center lg:order-2">
                <button
                    onClick={() => {
                        navigate('/')
                    }}
                className="text-white focus:ring-4 bg-blue-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
                    Go back
                    </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li 
                    onClick={() => {
                        dispatch(setHome())
                    }}
                    >
                        <span className="block hover:cursor-pointer py-2 pr-4 pl-3  rounded lg:bg-transparent  lg:p-0 text-gray-400 hover:text-white" aria-current="page">Home</span>
                    </li>
                    <li 
                    onClick={() => {
                        dispatch(setAgent())
                    }}
                    >
                        <span className="block hover:cursor-pointer py-2 pr-4 pl-3  border-b  lg:border-0  lg:p-0 text-gray-400 lg:hover:text-white  hover:text-white  border-gray-700">Agent</span>
                    </li>
                    <li 
                    onClick={() => {
                        dispatch(setSeller())
                    }}
                    >
                        <span className="block hover:cursor-pointer py-2 pr-4 pl-3  border-b  lg:border-0  lg:p-0 text-gray-400 lg:hover:text-white  hover:text-white  border-gray-700">Seller</span>
                    </li>
                    <li 
                    onClick={() => {
                        dispatch(setBuyer())
                    }}
                    >
                        <span className="block hover:cursor-pointer py-2 pr-4 pl-3  border-b  lg:border-0  lg:p-0 text-gray-400 lg:hover:text-white  hover:text-white  border-gray-700">Buyer</span>
                    </li>
                    <li 
                    onClick={() => {
                        dispatch(setPropertiesMarket())
                    }}
                    >
                        <span className="block hover:cursor-pointer py-2 pr-4 pl-3  border-b  lg:border-0  lg:p-0 text-gray-400 lg:hover:text-white  hover:text-white  border-gray-700">
Properties on the market</span>
                    </li>
                    <li 
                    onClick={() => {
                        dispatch(setSoldProperties())
                    }}
                    >
                        <span className="block hover:cursor-pointer py-2 pr-4 pl-3  border-b  lg:border-0  lg:p-0 text-gray-400 lg:hover:text-white  hover:text-white  border-gray-700">
Sold properties</span>
                    </li>
                    <li 
                    onClick={() => {
                        dispatch(setReports())
                    }}
                    >
                        <span className="block hover:cursor-pointer py-2 pr-4 pl-3  border-b  lg:border-0  lg:p-0 text-gray-400 lg:hover:text-white  hover:text-white  border-gray-700">
Reports </span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default HeaderPages