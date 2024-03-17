import pool from "../db.js";

export const getSalesxAgent = async (req, res) => {
    try {
        const resQuery = await pool.query(`SELECT * FROM vSalesAgent`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` });
    }
}
export const buyerPurchases = async (req, res) => {
    try {
        const resQuery = await pool.query(`SELECT * FROM vbuyerpurchases`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` })
    }
}
export const citySales = async (req, res) => {
    try {
        const resQuery = await pool.query(`SELECT * FROM vcitysales`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` })
    }
}
export const sellerSales = async(req, res) => {
    try{
        const resQuery = await pool.query(`SELECT * FROM vSalesSeller`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` })
    }
}
export const property_priceSales = async(req, res) => {
    try{
        const resQuery = await pool.query(`SELECT * FROM vSalesPrice`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` })
    }
}
export const featureSales = async(req, res) => {
    try{
        const resQuery = await pool.query(`SELECT * FROM vSalesFeature`)
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` })
    }
}

export const bestsellingagent = async (req, res) => {
    try {
        const {
            useryear
        } = req.params;
        const resQuery = await pool.query('SELECT * FROM fbestsellingagent($1)', [useryear]);
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` });
    }
};

export const agentsperformance = async (req, res) => {
    try {
        const {
            useryear
        } = req.params;
        const resQuery = await pool.query('SELECT * FROM fagentsperformance($1)', [useryear]);
        const fields = []
        resQuery.fields.map(field => fields.push(field.name))
        res.status(200).json({ data: resQuery.rows, fields });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `An error ocurred: ${error.message}` });
    }
};