import { Router } from "express";
import { getSalesxAgent } from "../controllers/reports.controllers.js";

const router =  Router();

router.get('/getSalesxAgent', getSalesxAgent)

export default router