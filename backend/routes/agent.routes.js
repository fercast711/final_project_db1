import {Router} from 'express'
import { getAgents, insertAgent, modifyAgent, deleteAgent } from '../controllers/agent.controllers.js'

const router = Router()

router.post('/insertAgent', insertAgent)
router.get('/getAgents', getAgents)
router.put('/updateAgent', modifyAgent)
router.delete('/deleteAgent', deleteAgent)

export default router