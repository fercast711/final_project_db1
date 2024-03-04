import { useSelector } from "react-redux"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const {signUp, logIn} = useSelector(state => state.auth)
    
  return (
    <>

    <div
      className="bg-[url(./assets/Villa-house-mansion-trees-lights-garden-night_3840x2160.jpg)] min-h-screen bg-cover bg-center opacity-95"
    >
      <Header/>
      <div className=" flex justify-center">
            <h1 className=" text-white font-extrabold font-sans text-7xl text-center max-w-5xl mt-11">The #1 site real estate professionals trust*</h1>
        </div>
        
    </div>
    {(signUp || logIn) && <Modal />}
    <ToastContainer/>
    </>
    

  )
}

export default Home