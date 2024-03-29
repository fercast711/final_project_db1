import pool from "../db.js";

export const insertAgent = async (req, res) => {
    try {
        const {
            identitynumber,
            name,
            address,
            phonenumber,
            officephone,
            username
        } = req.body;
        await pool.query(`SET myapp.username = '${username}'`)
      await pool.query('CALL pinsertAgent($1, $2, $3, $4, $5)', [identitynumber, name, address, phonenumber, officephone]);
      res.status(200).json({message: 'Success on adding agent!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

export const getAgents = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM vAllAgents`)
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
            username,
            officephone
        } = req.body;
        await pool.query(`SET myapp.username = '${username}'`)
      await pool.query('CALL pmodifyAgent($1, $2, $3, $4, $5)', [identitynumber, name, address, phonenumber, officephone]);
      res.status(200).json({message: 'Success on modifying agent!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

  export const deleteAgent = async (req, res) => {
    try {
        const {
            identitynumber,
            username
        } = req.body;
      await pool.query(`SET myapp.username = '${username}'`)
      await pool.query('CALL pdeleteAgent($1)', [identitynumber]);
      res.status(200).json({message: 'Success on deliting agent!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };