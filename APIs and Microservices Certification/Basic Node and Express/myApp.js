
var express = require('express');
var app = express();

/*
app.get('/', function (req, res)  {
  //res.send("Hello Express")
  res.sendFile("/views/index.html", {root: __dirname})
})
*/

path = __dirname + "/public"
app.use("/", express.static(path))

console.log("Hello World")

module.exports = app;