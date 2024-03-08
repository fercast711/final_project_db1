import {Router} from 'express'
import { getBuyers, insertBuyer } from '../controllers/buyer.controllers.js'

const router = Router()

router.post('/insertBuyer', insertBuyer)
router.get('/getBuyers', getBuyers)
//put -- actualizar
//get -- obtener
//delete -- eleminar

export default router