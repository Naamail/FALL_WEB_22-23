const express = require('express');
const path = require('path');
const BodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sql = require('./db/db');
const CreateDB = require('./db/CreateDB');
const CRUD = require('./db/CRUD');
const port = 2020;

const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'static')));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    //res.send('pug will be here soon');
    res.redirect('/homeSignUp');
});

app.get('/homeSignUp', (req,res)=>{
    res.render('homeSignUp');
});

app.post('/UserSignUp', CRUD.UserSignUp);


app.get('/signedUp', (req,res)=>{
    let userNameCookie = req.cookies.Signed_user;
    console.log(userNameCookie);
    res.render('welcome', {v1: userNameCookie});
});

app.get('/page2', CRUD.showAllEntries);

app.get('/page3', CRUD.UserSignIn);

// cretae DB
app.get('/createTables', CreateDB.CreateTable);

app.get('/dropTables', CreateDB.DropTable)

app.listen(port,()=>{
    console.log("server is running on port ", port);
})
