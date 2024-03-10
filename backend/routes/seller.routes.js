import {Router} from 'express'
import { getSellers, insertSeller, modifySeller, deleteSeller } from '../controllers/seller.controllers.js'

const router = Router()

router.post('/insertSeller', insertSeller)
router.get('/getSellers', getSellers)
router.put('/updateSeller', modifySeller)
router.delete('/deleteSeller', deleteSeller)

export default router