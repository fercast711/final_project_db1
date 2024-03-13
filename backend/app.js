import express from "express";
import cors from "cors";
import { 
    routerAgent, 
    routerBinnacle, 
    routerBuyer, 
    routerLogIn, 
    routerPropMarket, 
    routerReports, 
    routerSeller,
    routerSoldProps,
 } from "./routes/index.routes.js";
const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/agent',routerAgent)
app.use('/api/seller',routerSeller)
app.use('/api/buyer',routerBuyer)
app.use('/api/propMarket', routerPropMarket)
app.use('/api/soldProp', routerSoldProps)
app.use('/api/report', routerReports)
app.use('/api/logIn', routerLogIn)
app.use('/api/binnacle', routerBinnacle)

export default app;