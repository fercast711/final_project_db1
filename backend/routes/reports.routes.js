import { Router } from "express";
import { getSalesxAgent, citySales,buyerPurchases, sellerSales, property_priceSales, featureSales, bestsellingagent, agentsperformance} from "../controllers/reports.controllers.js";

const router =  Router();

router.get('/getSalesxAgent', getSalesxAgent)
router.get('/citySales', citySales)
router.get('/buyerPurchases', buyerPurchases)
router.get('/sellerSales', sellerSales)
router.get('/property_priceSales', property_priceSales)
router.get('/featureSales', featureSales)
router.get('/bestsellingagent', bestsellingagent)
router.get('/agentsperformance', agentsperformance)

export default router