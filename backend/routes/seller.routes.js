import {Router} from 'express'
import { insertSeller } from '../controllers/seller.controllers.js'

const router = Router()

router.post('/insertSeller', insertSeller)
//put -- actualizar
//get -- obtener
//delete -- eleminar

export default router