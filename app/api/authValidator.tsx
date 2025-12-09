// import pool from "../../db";

// export default async function authValidator(email:string) {
//     try {
//         console.log("email", email);
        
//         const result = await pool.query(`SELECT COUNT(*) as count FROM users WHERE email='${email}'`);
//         console.log("result",result.rows[0].count);
//         if(result.rows[0].count === '0'){
//             return { status: 'false' };
//         }
//         else {
//             return { status: 'success' };
//         }
//     } catch (error) {
        
//         console.error('Error fetching data:', error);
//         return { status: 'false' };
//     }
// }

// export default async function authV({req, res} : {req: any, res: any}) {
//     try {
//         const result = await pool.query('SELECT * FROM user');
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }