import express from "express";
import cors from "cors";
import { 
    routerAgent, 
    routerBuyer, 
    routerSeller,
 } from "./routes/index.routes.js";
const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/agent',routerAgent)
app.use('/api/seller',routerSeller)
app.use('/api/buyer',routerBuyer)

export default app;