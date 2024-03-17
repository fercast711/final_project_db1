import app from "./app.js"
import { PORT } from "./config.js";
import pool from "./db.js";

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})

// pool.connect().then(() => {
//   console.log('connect successful')
// }).catch((e) => {
//   console.log('error connecting', e.message)
// })

app.get('/api/hola', (req, res) => {
    res.json({message:'Hello, world'}).status(200)
})