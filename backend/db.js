import pkg from "pg";
import { DATABASE, HOST, PASSWORD, PORTDB, USER } from "./config.js";
const { Pool } = pkg

const pool = new Pool({
    user: 'fer',
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORTDB,
  })

export default pool;