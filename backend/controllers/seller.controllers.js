import pool from "../db.js";
export const insertSeller = async(req, res) => {
    try {
        const {
        identitynumber,
        name,
        address,
        phonenumber,
    } = req.body;

    await pool.query('CALL insertSeller($1, $2, $3, $4)', [identitynumber, name, address, phonenumber]);
      res.status(200).json({message: 'Success on adding seller!'});
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

export const modifySeller = async (req, res) => {
    try {
        const {
            identitynumber,
            name,
            address,
            phonenumber
        } = req.body;

      await pool.query('CALL modifySeller($1, $2, $3, $4)', [identitynumber, name, address, phonenumber]);
      res.status(200).json({message: 'Success on modifying seller!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

  export const deleteSeller = async (req, res) => {
    try {
        const {
            identitynumber
        } = req.body;
        
      await pool.query('CALL deleteSeller($1)', [identitynumber]);
      res.status(200).json({message: 'Success on deliting seller!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };