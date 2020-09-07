var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3000",
  database: "db1"
});

// con.destroy();

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

console.log(con);

