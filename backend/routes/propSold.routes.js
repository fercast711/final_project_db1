import {Router} from 'express'
import { getSoldProps, insertSP, modifySP, deleteSP, getSoldPropsSeller, getSoldPropsAgent } from '../controllers/soldProp.controllers.js'

const router = Router()

router.post('/insertSP', insertSP)
router.get('/getSoldProps', getSoldProps)
router.get('/getSoldPropsSeller/:userid', getSoldPropsSeller)
router.get('/getSoldPropsAgent/:userid', getSoldPropsAgent)
router.put('/updateSP', modifySP)
router.post('/deleteSP', deleteSP)

export default router