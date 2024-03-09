import {Router} from 'express'
import { getSellers, insertSeller } from '../controllers/seller.controllers.js'

const router = Router()

router.post('/insertSeller', insertSeller)
router.get('/getSellers', getSellers)
//put -- actualizar
//get -- obtener
//delete -- eleminar

export default router