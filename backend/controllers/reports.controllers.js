import pool from "../db.js";

export const getSalesxAgent = async (req, res) => {
    try {
        const resQuery = await pool.query(`SELECT * FROM vsalesxagent`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` });
    }
}
export const buyerPurchases = async(req, res) => {
    try{
        const resQuery = await pool.query(`SELECT * FROM vbuyerpurchases`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({data: resQuery.rows, fields});
    }catch(error){
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}`})
    }
}
export const citySales = async(req, res) => {
    try{
        const resQuery = await pool.query(`SELECT * FROM vcitysales`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({data: resQuery.rows, fields});
    }catch(error){
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}`})
    }
}