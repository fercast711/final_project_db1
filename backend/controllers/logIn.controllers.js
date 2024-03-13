import pool from "../db.js";
export const logIn = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;
        console.log(req.body)
        const resQuery = await pool.query(`SELECT identitynumber, username,isadmin, isseller, isbuyer, isagent FROM users WHERE username='${username}' AND password='${password}'`);
        if(resQuery.rows.length === 0){
            return res.status(500).json({message: `An error ocurred: your username or password doesn't exist`});
        }
        // await pool.query(`SET myapp.username = '${resQuery.rows[0].username}'`)
        res.status(200).json({data: resQuery.rows[0]});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `An error ocurred: ${error.message}`});
    }
}