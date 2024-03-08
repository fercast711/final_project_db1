import pool from "../db.js";
//Primera prueba de insercion de momento sin prodecimiento almacenado hasta que el tigre lo enseñe
export const insertAgent = async(req, res) => {
    try {
        const {
        identitynumber,
        name,
        address,
        phonenumber,
        officephone
    } = req.body;
    await pool.query(`INSERT INTO agents (identitynumber, name, address, phoneNumber, officePhone) VALUES('${identitynumber}','${name}','${address}',${phonenumber}, ${officephone})`)
    res.status(200).json({message: 'Success to add agent'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const getAgents = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM agents`)
    res.status(200).json({data: resQuery.rows});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}