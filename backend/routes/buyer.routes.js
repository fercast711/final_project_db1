import {Router} from 'express'
import { insertBuyer } from '../controllers/buyer.controllers.js'

const router = Router()

router.post('/insertBuyer', insertBuyer)
//put -- actualizar
//get -- obtener
//delete -- eleminar

export default router