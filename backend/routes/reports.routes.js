import { Router } from "express";
import { getSalesxAgent, citySales,buyerPurchases, sellerSales, property_priceSales, featureSales} from "../controllers/reports.controllers.js";

const router =  Router();

router.get('/getSalesxAgent', getSalesxAgent)
router.get('/citySales', citySales)
router.get('/buyerPurchases', buyerPurchases)
router.get('/sellerSales', sellerSales)
router.get('/property_priceSales', property_priceSales)
router.get('/featureSales', featureSales)

export default router