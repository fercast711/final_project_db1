import { useEffect } from "react"
import Cards from "../components/Cards"
import HeaderPages from "../components/HeaderPages"
import { useDispatch, useSelector } from "react-redux"
import { fetchGetPOMCards, fetchGetPOMCardsAgent, fetchGetPOMCardsSeller, fetchGetSPCardsAgent, fetchGetSPCardsSeller } from "../store/slice/cardSlice"

const UserPage = () => {
    const {typeCard, dataCard} = useSelector(state => state.card)
    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        switch (typeCard) {
            case 'allPOM':
                dispatch(fetchGetPOMCards())
                break;
            case 'allSPSeller':
                dispatch(fetchGetSPCardsSeller(currentUser.identitynumber))
                break;
            case 'allSPAgent':
                dispatch(fetchGetSPCardsAgent(currentUser.identitynumber))
                break;
            case 'allPOMSeller':
                dispatch(fetchGetPOMCardsSeller(currentUser.identitynumber))
                break;
                case 'allPOMAgent':
                    dispatch(fetchGetPOMCardsAgent(currentUser.identitynumber))
                    break;
            default:
                break;
        }
    },[typeCard])
  return (
    <div
    className="bg-gray-600 min-h-screen "
    >
        <HeaderPages />
        <div className="flex justify-center">
            <Cards data={dataCard}/>
        </div>
    </div>
  )
}

export default UserPage