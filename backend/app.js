import express from "express";
import cors from "cors";
import routerAuth from "./routes/auth.routes.js";
const app = express();

app.use(cors())
app.use(express.json())
app.use(routerAuth)
export default app;