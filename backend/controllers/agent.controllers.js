import pool from "../db.js";
//Primera prueba de insercion de momento sin prodecimiento almacenado hasta que el tigre lo enseñe
/*export const insertAgent = async(req, res) => {
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
}*/

export const insertAgent = async (req, res) => {
    try {
        const {
            identitynumber,
            name,
            address,
            phonenumber,
            officephone
        } = req.body;
      await pool.query('CALL insertAgent($1, $2, $3, $4, $5)', [identitynumber, name, address, phonenumber, officephone]);
      res.status(200).json({message: 'Success to add agent'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }finally {
        await pool.end(); // Cierra la conexión al pool cuando hayas terminado
      }
  };

export const getAgents = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM agents`)
    res.status(200).json({data: resQuery.rows});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const modifyAgent = async (req, res) => {
    try {
        const {
            identitynumber,
            name,
            address,
            phonenumber,
            officephone
        } = req.body;
      await pool.query('CALL modifyAgent($1, $2, $3, $4, $5)', [identitynumber, name, address, phonenumber, officephone]);
      res.status(200).json({message: 'Success to add agent'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }finally {
        await pool.end();
      }
  };

  export const deleteAgent = async (req, res) => {
    try {
        const {
            identitynumber
        } = req.body;
      await pool.query('CALL deleteAgent($1)', [identitynumber]);
      res.status(200).json({message: 'Success to add agent'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }finally {
        await pool.end();
      }
  };