import {Router} from 'express'
import { getBuyers, insertBuyer, modifyBuyer, deleteBuyer } from '../controllers/buyer.controllers.js'

const router = Router()

router.post('/insertBuyer', insertBuyer)
router.get('/getBuyers', getBuyers)
router.put('/updateBuyer', modifyBuyer)
router.delete('/deleteBuyer', deleteBuyer)
//put -- actualizar
//get -- obtener
//delete -- eleminar

export default router