import express from "express";
import cors from "cors";
import { 
    routerAgent,
    routerClient
 } from "./routes/index.routes.js";
const app = express();

app.use(cors())
app.use(express.json())
app.use(routerClient)
app.use(routerAgent)
export default app;