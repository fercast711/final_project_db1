import {Router} from 'express'
import { insertAgent } from '../controllers/agent.controllers.js'

const router = Router()

router.post('/insertAgent', insertAgent)

export default router