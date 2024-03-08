import {Router} from 'express'
import { getAgents, insertAgent } from '../controllers/agent.controllers.js'

const router = Router()

router.post('/insertAgent', insertAgent)
router.get('/getAgents', getAgents)

export default router