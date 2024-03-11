import pool from "../db.js";
 
export const insertPOM = async (req, res) => {
    try {
        const {
	        name,
	        city,
	        address,
	        phonenumber,
	        bedroomcount,
	        features,
	        price,
	        agentidentitynumber,
	        selleridentitynumber
        } = req.body;

      await pool.query('CALL insertPOM($1, $2, $3, $4, $5, $6, $7, $8, $9)', [name, city, address, phonenumber, bedroomcount, features, price, agentidentitynumber, selleridentitynumber]);
      res.status(200).json({message: 'Success on adding property!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

export const getPropsMarket = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM properties_on_market`)
    res.status(200).json({data: resQuery.rows});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const modifyPOM = async (req, res) => {
    try {
        const {
            propertyid,
	        name,
	        city,
	        address,
	        phonenumber,
	        bedroomcount,
	        features,
	        price,
	        agentidentitynumber,
	        selleridentitynumber
        } = req.body;

      await pool.query('CALL modifyPOM($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [propertyid, name, city, address, phonenumber, bedroomcount, features, price, agentidentitynumber, selleridentitynumber]);
      res.status(200).json({message: 'Success on modifying property!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

  export const deletePOM = async (req, res) => {
    try {
        const {
            propertyid
        } = req.body;

      await pool.query('CALL deletePOM($1)', [propertyid]);
      res.status(200).json({message: 'Success on deleting property!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };