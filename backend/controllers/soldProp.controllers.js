import pool from "../db.js";

export const insertSP = async (req, res) => {
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
      publicationdate,
      saledate,
      agentidentitynumber,
      selleridentitynumber,
      buyeridentitynumber,
      salecommission
    } = req.body;

    await pool.query('CALL pinsertsp($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', [propertyid, name, city, address, phonenumber, bedroomcount, features, price, saleprice, publicationdate, saledate, agentidentitynumber, selleridentitynumber, buyeridentitynumber, salecommission]);
    res.status(200).json({ message: 'Success on adding property!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `An error ocurred: ${error.message}` });
  }
};

export const getSoldProps = async (req, res) => {
  try {
    const resQuery = await pool.query(`SELECT
    propertyid,
    name,
    address,
    city,
    phonenumber,
    bedroomcount,
    features,
    price,
    saleprice,
    TO_CHAR(publicationdate, 'YYYY-MM-DD') AS publicationdate,
    TO_CHAR(saledate, 'YYYY-MM-DD') AS saledate,
    agentidentitynumber,
    selleridentitynumber,
    buyeridentitynumber,
    salecommission
  FROM sold_properties`)
    res.status(200).json({ data: resQuery.rows });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `An error ocurred: ${error.message}` });
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
      publicationdate,
	    saledate,
      agentidentitynumber,
      selleridentitynumber,
      buyeridentitynumber,
      salecommission
    } = req.body;

    await pool.query('CALL pmodifysp($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', [propertyid, name, city, address, phonenumber, bedroomcount, features, price, saleprice, publicationdate, saledate, agentidentitynumber, selleridentitynumber, buyeridentitynumber, salecommission]);
    res.status(200).json({ message: 'Success on modifying property!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `An error ocurred: ${error.message}` });
  }
};

export const deleteSP = async (req, res) => {
  try {
    const {
      propertyid
    } = req.body;

    await pool.query('CALL pdeletesp($1)', [propertyid]);
    res.status(200).json({ message: 'Success on deleting property!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `An error ocurred: ${error.message}` });
  }
};