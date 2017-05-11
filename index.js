var express = require('express');
var studentModule = require("./src/student");
var adminModule = require("./src/admin");
var staffModule = require("./src/staff");

var app = express();

app.use("/student", studentModule);
app.use("/staff", staffModule);
app.use("/admin", adminModule);


app.listen(3004, function() {
    console.log("Server start...!");
});