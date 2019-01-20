// Require mysql
const mysql = require("mysql");
// const config = require("./config.json");
let connection;

if(process.env.NODE_ENV === 'production') {
    // Set up connection information
    connection = mysql.createConnection({
        port: process.env.PORT,
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
} else {
    // Set up connection information
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "root",
        database: "movievue_db"
    });
}


// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
