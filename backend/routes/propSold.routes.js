import {Router} from 'express'
import { getSoldProps } from '../controllers/soldProp.controllers.js'

const router = Router()

router.get('/getSoldProps', getSoldProps)
//put -- actualizar
//get -- obtener
//delete -- eleminar

export default router