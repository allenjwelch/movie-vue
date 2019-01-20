// Require mysql
const mysql = require("mysql");
const config = require(__dirname + "./config.json");

// Set up our connection information
let connection = mysql.createConnection({
  port: 3306 || process.env.PORT,
  host: "localhost" || config.production.host,
  user: "root" || config.production.username,
  password: "root" || config.production.password,
  database: "movievue_db" || config.production.database
});

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
