// import + declare what ever you need
const express = require('express');
const BodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const sql = require('./db/db');
const CreateDB = require('./db/CreateDB');
const CSVToJSON = require('csvtojson');


// setups
const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(express.static('static'));


//routs
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/CreateTable',CreateDB.CreateTable);

app.get("/InsertData", CreateDB.InsertData);

app.get('/ShowTable', CreateDB.ShowTable);

app.get('/DropTable', CreateDB.DropTable);

// listen
app.listen(port, ()=>{
    console.log("server is running on port " + port);
});
