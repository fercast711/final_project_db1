import pool from "../db.js";
 
export const getSoldProps = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM sold_properties`)
    res.status(200).json({data: resQuery.rows});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}