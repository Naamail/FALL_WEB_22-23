const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const sql = require('./db');
const CRUD = require('./CRUD');
const port = 9090;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

// sign up form route
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/SignUpForm.html'));
});

// insertUserintoDB route
app.post('/insertUserintoDB', CRUD.insertNewSignIN);

// show all send form route
app.get('/ShowAllForm', (req, res)=>{
    res.sendFile(path.join(__dirname, "views/ShowAllUsers.html"));
})

// showAll query route
app.get('/showAll',CRUD.showAll);

// search user by name form
app.get('/searchByNameForm', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/findUser.html"));
});

// find users by name
app.get('/findCustomer', CRUD.findUser);

app.listen(port, ()=>{
    console.log("server is running on port ", port);
});