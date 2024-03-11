import { Router } from "express";
import { getSalesxAgent, citySales,buyerPurchases} from "../controllers/reports.controllers.js";

const router =  Router();

router.get('/getSalesxAgent', getSalesxAgent)
router.get('/citySales', citySales)
router.get('/buyerPurchases', buyerPurchases)

export default router