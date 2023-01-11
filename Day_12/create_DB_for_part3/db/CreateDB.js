var SQL = require('./db');
const path = require('path');
const csv=require('csvtojson');

const CreateTable = (req,res)=> {
    var Q1 = "CREATE TABLE items (name VARCHAR(255), email VARCHAR(255))";
    SQL.query(Q1,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table"});
            return;
        }
        console.log('created items table table');
        res.send("items table created");
        return;
    })      
}

const InsertData = (req,res)=>{
    var Q2 = "INSERT INTO items SET ?";
    const csvFilePath= path.join(__dirname, "data.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "name": element.name,
            "email": element.email
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting data", err);
            }
            console.log("created row sucssefuly ");
        });
    });
    });
    
    res.send("data inserted");

};

const ShowTable = (req,res)=>{
    var Q3 = "SELECT * FROM items";
    SQL.query(Q3, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing table ", err);
            res.send("error in showing table ");
            return;
        }
        console.log("showing table");
        res.send("/InsertData");
        return;
    })};

const DropTable = (req, res)=>{
    var Q4 = "DROP TABLE items";
    SQL.query(Q4, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping table ", err);
            res.status(400).send({message: "error om dropping table" + err});
            return;
        }
        console.log("table drpped");
        res.send("table drpped");
        return;
    })
}


module.exports = {CreateTable, InsertData, ShowTable, DropTable};

