import {Router} from 'express'
import { logIn } from '../controllers/logIn.controllers.js'

const router = Router()

router.post('/getDataUser', logIn)

export default router