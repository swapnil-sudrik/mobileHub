const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');


// Set your MySQL connection details
const user = 'root';
const pwd = 'Swa@12345';
const name = 'mobileapplication'; // database name
const host = 'localhost';
const dialect = 'mysql';


// Create a MySQL connection and execute the query
(async () => {
  try {
    const connection = await mysql.createConnection({
      user: user,
      password: pwd
    });

    const sequelize = new Sequelize({
      dialect: dialect,
      host:host,
      username: user,
      password: pwd
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS ${name};`);
    console.log(`Database ${name} created successfully.`);
    
    await connection.end(); // Close the MySQL connection

  } catch (error) {
    console.error('Error:', error.message);
  }
})();
// Create a connection pool
const pool = mysql.createPool({
  host: host,
  user: user,
  password: pwd,
  database: name,
  waitForConnections: true,
  connectionLimit: 10, // Adjust this based on your application's needs
  queueLimit: 0,
});

module.exports = pool;
