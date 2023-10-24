// db.js
import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: 'localhost',
    database: 'mamaLeesFlavors',
    //port: process.env.MYSQL_PORT,
    user: 'root',
    password: 'password'
  }
});
// db.connect((err) => {
  // if (err) {
  //   console.log(err);
  // } else {
  //   console.log('Connected to MySQL!')
  // }
// });

export default async function executeQuery({query, values}) {
  db.connect();
  try {
    console.log('connected here!');
    const results = await db.query(`SELECT  * FROM Flavors`)
    await db.end();
    return results;
  } catch(error) {
    return error
  }
}
