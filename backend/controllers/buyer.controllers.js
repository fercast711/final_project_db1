import pool from "../db.js";
//Primera prueba de insercion de momento sin prodecimiento almacenado hasta que el tigre lo enseñe
export const insertBuyer = async(req, res) => {
    try {
        const {
        identitynumber,
        name,
        address,
        phonenumber,
    } = req.body;
    console.log(req.body)

    await pool.query('CALL pinsertBuyer($1, $2, $3, $4)', [identitynumber, name, address, phonenumber]);
      res.status(200).json({message: 'Success on adding buyer!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const getBuyers = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM buyers`)
    res.status(200).json({data: resQuery.rows});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const modifyBuyer = async (req, res) => {
    try {
        const {
            identitynumber,
            name,
            address,
            phonenumber
        } = req.body;

      await pool.query('CALL pmodifyBuyer($1, $2, $3, $4)', [identitynumber, name, address, phonenumber]);
      res.status(200).json({message: 'Success on modifying buyer!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

  export const deleteBuyer = async (req, res) => {
    try {
        const {
            identitynumber
        } = req.body;
        
      await pool.query('CALL pdeleteBuyer($1)', [identitynumber]);
      res.status(200).json({message: 'Success on deleting buyer!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };