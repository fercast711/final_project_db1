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
      publicationdate,
      agentidentitynumber,
      selleridentitynumber,
      username
    } = req.body;
    await pool.query(`SET myapp.username = '${username}'`)
    await pool.query('CALL pinsertPOM($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [name, city, address, phonenumber, bedroomcount, features, price,publicationdate, agentidentitynumber, selleridentitynumber]);
    res.status(200).json({ message: 'Success on adding property!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `An error ocurred: ${error.message}` });
  }
};

export const getPropsMarket = async (req, res) => {
  try {
    const resQuery = await pool.query(`
    SELECT
    propertyid,
    name,
    address,
    city,
    phonenumber,
    bedroomcount,
    features,
    price,
    TO_CHAR(publicationdate, 'YYYY-MM-DD') AS publicationdate,
    agentidentitynumber,
    selleridentitynumber
  FROM properties_on_market;
  `)
    res.status(200).json({ data: resQuery.rows });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `An error ocurred: ${error.message}` });
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
      publicationdate,
      agentidentitynumber,
      selleridentitynumber,
      username
    } = req.body;
    await pool.query(`SET myapp.username = '${username}'`)
    await pool.query('CALL pmodifyPOM($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [propertyid, name, city, address, phonenumber, bedroomcount, features, price, publicationdate, agentidentitynumber, selleridentitynumber]);
    res.status(200).json({ message: 'Success on modifying property!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `An error ocurred: ${error.message}` });
  }
};

export const deletePOM = async (req, res) => {
  try {
    const {
      propertyid, 
      username
    } = req.body;
    await pool.query(`SET myapp.username = '${username}'`)
    await pool.query('CALL pdeletePOM($1)', [propertyid]);
    res.status(200).json({ message: 'Success on deleting property!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `An error ocurred: ${error.message}` });
  }
};