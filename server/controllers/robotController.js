const mysql = require("mysql2");
require("dotenv").config();
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3006,
  user: "root",
  password: process.env.SQL_PASSWORD,
  database: "robot_info",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connection establised");

    connection.query("USE robot_info;");
    connection.query("Select * from robot_location", (err, results, fields) => {
      if (err) throw err;
      console.log(results);
    });
    connection.end();
  }
});

//We need the following tables
// callback_rec
// ins_send
// robot
// robot_location
// task
const getRobotLocation = async (req, res) => {
  //console.log(process.env.SQL_PASSWORD);
};

module.exports = getRobotLocation;
