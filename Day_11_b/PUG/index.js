const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const sql = require('./db/db');
const CRUD = require('./db/CRUD');
const CRUDdb = require('./db/CRUDdb');
const port = 1010;

app.use(express.static(path.join(__dirname,'static')));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

// set up view engine
app.set("views", path.join(__dirname,"views"));
app.set("view engine", 'pug');

// home page route
app.get('/', (req,res)=>{
    res.redirect('/home');
});

app.get('/home', (req,res)=>{
    //res.send("Hi PUG");
    const t = new Date();
    console.log(t);
    res.render("index", {
        v1:"HOME PUG",
        v2:'This is an intro to pug',
        v3: 'last updated on:  '+ t 
    });
});

app.get('/page2', (req,res)=>{
    res.render("index", {
        v1:"Page 2 PUG",
        v2:"another page rendered by pug",
        v3:''
    });
});


app.get('/page3', (req,res)=>{
    res.render("showAll", {
        v1:"Click the btn to select * from customers table"
    });
});

app.get('/show_all_customers', CRUD.showAll);

//create tables insertito and drop routs
app.get("/createTable1", CRUDdb.createT1)


app.listen(port, ()=>{
    console.log('server is running on port ', port);
});

var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(8080)

// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:8080 --cookie "Cho=Kim;Greet=Hello"