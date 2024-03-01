import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className=" bg-gray-600 shadow-md z-10 relative">
        <div className="flex justify-between items-center mx-auto p-2">
            <h1 className=" text-lg font-bold">
                <span className=' text-white'>Bienes</span>
                <span className=' text-gray-300'>Raices</span>
            </h1>
            <ul className="flex gap-4">
                <Link>
                    <li className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Log in</li>
                </Link>
                <Link>
                    <li className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign Up</li>
                </Link>

            </ul>
        </div>
        
    </header>
  )
}

export default Header