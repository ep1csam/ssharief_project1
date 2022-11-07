var express = require('express');
var path = require('path');
 
var app = express();
 
app.get("/", function(req, res){
 res.sendFile(__dirname+"/home.html");
});

app.get("/profile", function(req, res){
    res.sendFile(__dirname+"/profile.html");
   });
app.get("/qualifications", function(req, res){
    res.sendFile(__dirname+"/qualifications.html");
   });

app.get("/showcase", function(req, res){
    res.sendFile(__dirname+"/showcase.html");
   });

app.get("/reflection", function(req, res){
    res.sendFile(__dirname+"/reflection.html");
   });
app.get("/contact", function(req, res){
res.sendFile(__dirname+"/contact.html");
});

app.use(express.static(path.join(__dirname, '/')));
   
app.listen(9999, function () {
 console.log('App listening on port 9999!');
});
