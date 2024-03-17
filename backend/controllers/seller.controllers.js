import pool from "../db.js";
export const insertSeller = async(req, res) => {
    try {
        const {
        identitynumber,
        name,
        address,
        phonenumber,
        username
    } = req.body;
    await pool.query(`SET myapp.username = '${username}'`)
    await pool.query('CALL pinsertSeller($1, $2, $3, $4)', [identitynumber, name, address, phonenumber]);
      res.status(200).json({message: 'Success on adding seller!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const getSellers = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM vAllSellers`)
    res.status(200).json({data: resQuery.rows});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const modifySeller = async (req, res) => {
    try {
        const {
            identitynumber,
            name,
            address,
            phonenumber,
            username
        } = req.body;
        await pool.query(`SET myapp.username = '${username}'`)
      await pool.query('CALL pmodifySeller($1, $2, $3, $4)', [identitynumber, name, address, phonenumber]);
      res.status(200).json({message: 'Success on modifying seller!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

  export const deleteSeller = async (req, res) => {
    try {
        const {
            identitynumber,
            username
        } = req.body;
        await pool.query(`SET myapp.username = '${username}'`)
      await pool.query('CALL pdeleteSeller($1)', [identitynumber]);
      res.status(200).json({message: 'Success on deliting seller!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };