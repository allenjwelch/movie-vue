// Require mysql
const mysql = require("mysql");
// const config = require("./config.json");
let connection;

if(process.env.NODE_ENV === 'production') {
    // Set up connection information
    connection = mysql.createConnection({
        port: 3306,
        host: 'uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'vv9c7p35v5zsnyl5',
        password: 'ov9szazhgglk7e77',
        database: 'guxzxy1n09t2jp61'
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
