import pool from "../db.js";
 
export const insertSP = async (req, res) => {
    try {
        const {
	        name,
	        city,
	        address,
	        phonenumber,
	        bedroomcount,
	        features,
	        price,
            saleprice,
	        publicationdate,
	        agentidentitynumber,
	        selleridentitynumber,
            buyeridentitynumber,
            salecommission
        } = req.body;

      await pool.query('CALL insertSP($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [name, city, address, phonenumber, bedroomcount, features, price, saleprice, publicationdate, agentidentitynumber, selleridentitynumber, buyeridentitynumber, salecommission]);
      res.status(200).json({message: 'Success on adding property!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

export const getSoldProps = async(req, res) => {
    try {
    const resQuery = await pool.query(`SELECT * FROM sold_properties`)
    res.status(200).json({data: resQuery.rows});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}

export const modifySP = async (req, res) => {
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
            saleprice,
	        agentidentitynumber,
	        selleridentitynumber,
            buyeridentitynumber,
            salecommission
        } = req.body;

      await pool.query('CALL modifySP($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [propertyid, name, city, address, phonenumber, bedroomcount, features, price, saleprice, agentidentitynumber, selleridentitynumber, buyeridentitynumber, salecommission]);
      res.status(200).json({message: 'Success on modifying property!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };

  export const deleteSP = async (req, res) => {
    try {
        const {
            propertyid
        } = req.body;

      await pool.query('CALL deleteSP($1)', [propertyid]);
      res.status(200).json({message: 'Success on deleting property!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
  };