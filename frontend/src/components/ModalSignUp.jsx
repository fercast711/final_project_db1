import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setSignUp } from '../store/slice/authSlice'
import FormClient from './FormClient'


const ModalSignUp = () => {
    const dispatch = useDispatch()
    return (
        <div className="fixed inset-0 overflow-y-auto min-h-screen flex items-center justify-center " >
            <div className=" max-w-xl p-6 rounded-lg shadow bg-gray-800 border-gray-700 min-w-[576px]">
                <div className='flex justify-end p-2'>
                    <MdClose
                        onClick={() => {
                            dispatch(setSignUp(false));
                        }}
                        className="h-5 w-5 hover:cursor-pointer text-white text-end font-bold" />
                </div>
            <FormClient dispatch={dispatch} setSignUp={setSignUp}/>
                
            </div>

        </div>
    )
}

export default ModalSignUp