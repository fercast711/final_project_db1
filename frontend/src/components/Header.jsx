import { Link } from "react-router-dom"
import { setLogIn } from "../store/slice/authSlice"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {
    const dispatch = useDispatch()
    const {logIn} = useSelector(state => state.auth)
  return (
    <header className=" bg-gray-600 shadow-md z-10 relative">
        <div className="flex justify-between items-center mx-auto p-3">
            <Link to='/'>
            <h1 className=" text-lg font-bold">
                <span className=' text-white'>Real</span>
                <span className=' text-gray-300'>State</span>
            </h1>
            </Link>
            
            <ul className="flex gap-4 items-center justify-center">
                <li 
                onClick={() => {
                    dispatch(setLogIn(!logIn))
                }}
                className="text-white hover:cursor-pointer bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    Log in
                </li>

            </ul>
        </div>
        
    </header>
  )
}

export default Header