import {Router} from 'express'
import { getPropsMarket } from '../controllers/propMarket.controllers.js'

const router = Router()

router.get('/getPropsMarket', getPropsMarket)
//put -- actualizar
//get -- obtener
//delete -- eleminar

export default router