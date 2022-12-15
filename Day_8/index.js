const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const sql = require('./db');
const connection = require('./db');
const port = 8080;

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.redirect("/home");
})

app.get('/home', (req,res)=>{
    //res.send('Hello again express');
    res.sendFile(path.join(__dirname,"views/home.html"));
})

app.get('/page2', (req,res)=>{
    //res.send("hello page 2");
    res.sendFile(path.join(__dirname, "views/page2.html"))
});

var F1 = (req,res,next)=>{
    console.log("this is a middleware");
    next();
    };

var F2 = (req,res)=>{
    //res.redirect('/home');
    res.sendFile(path.join(__dirname,"views/page3.html"))
    };

app.get('/page3', [F1,F2]);


app.listen(port, ()=>{
    console.log("server is running on port "+port);
})