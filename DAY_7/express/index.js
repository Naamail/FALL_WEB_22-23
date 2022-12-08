// here are all the modules i'm going 2 use
var express = require('express');
var app = express();
var path = require('path');
var port =8000;

// here are all the routs
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"homePage.html"));
    //res.send("hello express");
});

app.get('/intro', (req,res)=>{
    res.send("hello Page 1");
});


app.get('/page2', (req,res)=>{
    res.send("hello Page 2");
});


app.get('/page3', (req,res)=>{
    res.send("hello Page 3");
});

// listen
app.listen(port, ()=>{
    console.log("app is running on port " + port);
});