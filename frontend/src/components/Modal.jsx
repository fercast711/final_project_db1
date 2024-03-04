import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setLogIn, setSignUp } from '../store/slice/authSlice'
import FormClient from './FormClient'
import { useState } from 'react'
import FormAgent from './FormAgent'
import FormLogIn from './FormLogIn'


const Modal = () => {
    const { signUp, logIn } = useSelector(state => state.auth)
    const [typeInsertion, setTypeInsertion] = useState("Client")
    const dispatch = useDispatch()
    const handleChangeType = (e) => {
        setTypeInsertion(e.target.value)
    }
    const configToast = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }
    return (
        <div className="fixed inset-0 overflow-y-auto min-h-screen flex items-center justify-center " >
            <div className=" max-w-xl p-6 rounded-lg shadow bg-gray-800 border-gray-700 min-w-[576px]">
                <div className='flex justify-end p-2'>
                    <MdClose
                        onClick={() => {
                            dispatch(setSignUp(false));
                            dispatch(setLogIn(false));
                        }}
                        className="h-5 w-5 hover:cursor-pointer text-white text-end font-bold" />
                </div>
                {signUp && (
                    <select
                        id="typeInsertion"
                        name="typeInsertion"
                        onChange={handleChangeType}
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-2'
                    >
                        <option value="Client">Cliente</option>
                        <option value="Agent">Agente</option>
                    </select>
                )}

                {(signUp && typeInsertion === "Client") && (
                    <FormClient
                        dispatch={dispatch}
                        setSignUp={setSignUp}
                        configToast={configToast}
                    />
                )}
                {(signUp && typeInsertion === "Agent") && (
                    <FormAgent
                        dispatch={dispatch}
                        setSignUp={setSignUp}
                        configToast={configToast}
                    />
                )}
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