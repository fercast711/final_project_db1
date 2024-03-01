import app from "./app.js"
import { PORT } from "./config.js";
import pool from "./db.js";

pool.connect().then(()=> {
    console.log("Database connection established")
}).catch(()=> {
    console.log("An error occurred")
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})

app.get('/api/hola', (req, res) => {
    res.json({message:'Hello, world'}).status(200)
})