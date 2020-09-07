// link mysql to nodejs

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "",
  port: "3000",
  debug: true
}).connect(function(err) {
  console.log("Connected!");
  if (err) throw err;
});
