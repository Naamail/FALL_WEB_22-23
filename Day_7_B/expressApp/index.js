var express = require('express');
var app = express();
var path = require('path');
var port = 8200;
app.use(express.static('static'));


// home page route 
app.get('/', (req,res)=>{
    res.send("hello express");
});

// page 2 route
app.get('/page2', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/servingHTMLdemo.html'))
    //res.send("hello page 2")
});

// set listen
app.listen(port, ()=>{
    console.log("express server is running on port "+ port);
});