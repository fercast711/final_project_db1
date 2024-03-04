import pool from "../db.js";
//Primera prueba de insercion de momento sin prodecimiento almacenado hasta que el tigre lo enseñe
export const insertAgent = async(req, res) => {
    try {
        const {
        noId,
        name,
        address,
        phoneNumber,
        officeNumber
    } = req.body;
    await pool.query(`INSERT INTO agentes (noidentidad, nombre, direccion, celular,telefonooficina) VALUES('${noId}','${name}','${address}',${phoneNumber}, ${officeNumber})`)
    res.status(200).json({message: 'Success to add agent'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}