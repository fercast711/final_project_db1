import pool from "../db.js";
//Primera prueba de insercion de momento sin prodecimiento almacenado hasta que el tigre lo enseñe
export const insertSeller = async(req, res) => {
    try {
        const {
        identitynumber,
        name,
        address,
        phonenumber,
    } = req.body;
    console.log(req.body)

    await pool.query(`INSERT INTO sellers (identitynumber, name, address, phonenumber) VALUES('${identitynumber}','${name}','${address}',${phonenumber})`)


    res.status(200).json({message: 'Success to add client'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const getSellers = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM sellers`)
    res.status(200).json({data: resQuery.rows});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}