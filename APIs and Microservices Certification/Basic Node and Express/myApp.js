
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    //res.send("Hello Express")
    res.sendFile("/views/index.html", { root: __dirname })
})

console.log("Hello World")

module.exports = app;
