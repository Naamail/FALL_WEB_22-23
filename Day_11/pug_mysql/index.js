const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const path = require('path');
const port = 6060;

const CRUD = require('./CRUD');
const mysql = require('./db')

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static('static'));

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home page route
app.get('/', (req,res)=>{
    res.redirect('/home');
});

app.get('/home', (req,res)=>{
    res.render('index', {
        v1: "this is an example for a PUG rendering",
        v2: "it is a way to pass variables into a dynamic webpage"
    });
});

app.get('/page2', (req,res)=>{
    res.render('index', {
        v1: "Page 2",
        v2: ""
    });
});

app.get('/page3', (req,res)=>{
    res.render('index', {
        v1: "Page 3",
        v2: ""
    });
});

app.get('/selectAll', CRUD.select_all)

// set listen
app.listen(port, ()=>{
    console.log("server is running on port ", port);
})



