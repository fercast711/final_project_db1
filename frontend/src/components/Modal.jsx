import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setLogIn } from '../store/slice/authSlice'
import FormLogIn from './FormLogIn'
import { setFormAgent, setFormBuyer, setFormSeller } from '../store/slice/formRender'
import FormAgent from './FormAgent'
import FormClient from './FormClient'

const Modal = () => {
    const { logIn } = useSelector(state => state.auth)
    const {
        formSellers,
        formBuyers,
        formAgents,
        formAgentIntialData,
        formClientInitialData
      } = useSelector(state => state.formRender)
    
    const dispatch = useDispatch()

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
            <div className=" max-w-xl p-6 rounded-lg shadow bg-gray-900 border-gray-700 min-w-[576px]">
                <div className='flex justify-end p-2'>
                    <MdClose
                        onClick={() => {
                            dispatch(setLogIn(false));
                            dispatch(setFormAgent(false))
                            dispatch(setFormBuyer(false))
                            dispatch(setFormSeller(false))
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
                {
                    formAgents && <FormAgent 
                    dispatch={dispatch} 
                    configToast={configToast} 
                    initialValues={formAgentIntialData}
                    />
                }
                {
                    formSellers && <FormClient 
                    dispatch={dispatch}
                    configToast={configToast}
                    initialValues={formClientInitialData}
                    />
                }
                {
                    formBuyers && <FormClient 
                    dispatch={dispatch}
                    configToast={configToast}
                    initialValues={formClientInitialData}
                    />
                }
            </div>

        </div>
    )
}

export default Modal