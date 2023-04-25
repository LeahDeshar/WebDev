const mysql = require("mysql");
const con = mysql.createConnection({
    host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase',
  port: 3306
});

con.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL server: ', err);
      return;
    }
    console.log('Connected to MySQL server');
  });
  
  // close the MySQL connection
//   con.end();

module.exports.con = con;