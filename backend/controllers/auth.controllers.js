import pool from "../db.js";
//Primera prueba de insercion de momento sin prodecimiento almacenado hasta que el tigre lo enseñe
export const insertClient = async(req, res) => {
    try {
        const {
        noId,
        name,
        address,
        phoneNumber,
        typeClient
    } = req.body;
    console.log(req.body)

    if(typeClient.includes("Vendedor")){
        await pool.query(`INSERT INTO vendedores (noidentidad, nombre, direccion, celular) VALUES('${noId}','${name}','${address}',${phoneNumber})RETURNING *`)
    }
    if(typeClient.includes("Comprador")){
        await pool.query(`INSERT INTO Compradores (noidentidad, nombre, direccion, celular) VALUES('${noId}','${name}','${address}',${phoneNumber})RETURNING *`)
    }
    res.json({message: 'Insert Success'}).status(200);
    } catch (error) {
        console.log(error)
        res.json({message: `Insert Error ${error.message}`}).status(500);
    }
}