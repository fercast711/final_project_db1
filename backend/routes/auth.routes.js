import {Router} from 'express'
import { insertClient } from '../controllers/auth.controllers.js'

const router = Router()

router.post('/api/insertClient', insertClient)

export default router