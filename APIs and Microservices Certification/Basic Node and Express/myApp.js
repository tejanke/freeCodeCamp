
var express = require('express');
var app = express();

//----------------------------------
/*
app.get('/', function (req, res)  {
  //res.send("Hello Express")
  res.sendFile("/views/index.html", {root: __dirname})
})
*/

//----------------------------------
/*
path = __dirname + "/public"
app.use("/", express.static(path))
*/

//----------------------------------
/*
process.env.MESSAGE_STYLE = "uppercase";

var data = {"message": "Hello json"}

app.get('/json', function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    data.message = data.message.toUpperCase();
    res.json(data)
  }
  else {
  res.json(data)
  }
})
*/

//----------------------------------
/*
app.use("/", function(req, res, next) {
  console.log(req.method, req.path, "-", req.ip)
  next();
}
)

console.log("Hello World")
*/

/*
//----------------------------------
app.get('/now', function (req, res, next) {
  req.time = new Date().toString()
  next();
}, function(req, res) {
  var now = {"time": req.time}
  res.json(now)
})
*/

//----------------------------------
var data = { "echo": "" }
app.get('/:word/echo', function (req, res) {
  console.log(req.params)
  data.echo = req.params.word
  res.json(data)
})

module.exports = app;
