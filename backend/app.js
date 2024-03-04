import express from "express";
import cors from "cors";
import { 
    routerAgent,
    routerClient
 } from "./routes/index.routes.js";
const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/client',routerClient)
app.use('/api/agent',routerAgent)

export default app;