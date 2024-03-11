import {Router} from 'express'
import { getSoldProps, insertSP, modifySP, deleteSP } from '../controllers/soldProp.controllers.js'

const router = Router()

router.post('/insertSP', insertSP)
router.get('/getSoldProps', getSoldProps)
router.put('/updateSP', modifySP)
router.post('/deleteSP', deleteSP)

export default router