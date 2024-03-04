import {Router} from 'express'
import { insertClient } from '../controllers/client.controllers.js'

const router = Router()

router.post('/insertClient', insertClient)

export default router