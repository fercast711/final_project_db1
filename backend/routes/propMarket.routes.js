import {Router} from 'express'
import { getPropsMarket, insertPOM, modifyPOM, deletePOM } from '../controllers/propMarket.controllers.js'

const router = Router()

router.post('/insertPOM', insertPOM)
router.get('/getPropsMarket', getPropsMarket)
router.put('/updatePOM', modifyPOM)
router.delete('/deletePOM', deletePOM)

export default router