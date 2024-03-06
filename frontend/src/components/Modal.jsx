import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setLogIn } from '../store/slice/authSlice'
import FormLogIn from './FormLogIn'


const Modal = () => {
    const { logIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    // const configToast = {
    //     position: "top-center",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     }
    return (
        <div className="fixed inset-0 overflow-y-auto min-h-screen flex items-center justify-center " >
            <div className=" max-w-xl p-6 rounded-lg shadow bg-gray-800 border-gray-700 min-w-[576px]">
                <div className='flex justify-end p-2'>
                    <MdClose
                        onClick={() => {
                            dispatch(setLogIn(false));
                        }}
                        className="h-5 w-5 hover:cursor-pointer text-white text-end font-bold" />
                </div>


                {logIn && (
                    <FormLogIn
                        dispatch={dispatch}
                        setLogIn={setLogIn}
                    />
                )
                }
            </div>

        </div>
    )
}

export default Modal