import {Router} from 'express'
import { getBinnacle } from '../controllers/binnacle.controllers.js'

const router = Router()

router.get('/getBinnacle', getBinnacle)

export default router