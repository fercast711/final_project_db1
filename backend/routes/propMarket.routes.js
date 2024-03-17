import {Router} from 'express'
import { getPropsMarket, insertPOM, modifyPOM, deletePOM, getPropsMarketBuyer, getPropsMarketSeller, getPropsMarketAgent } from '../controllers/propMarket.controllers.js'

const router = Router()

router.post('/insertPOM', insertPOM)
router.get('/getPropsMarket', getPropsMarket)
router.get('/getPropsMarketBuyer', getPropsMarketBuyer)
router.get('/getPropsMarketSeller/:userid', getPropsMarketSeller)
router.get('/getPropsMarketAgent/:userid', getPropsMarketAgent)
router.put('/updatePOM', modifyPOM)
router.post('/deletePOM', deletePOM)

export default router