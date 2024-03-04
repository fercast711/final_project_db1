import {Router} from 'express'
import { insertAgent } from '../controllers/agent.controllers.js'

const router = Router()

router.post('/api/insertAgent', insertAgent)

export default router