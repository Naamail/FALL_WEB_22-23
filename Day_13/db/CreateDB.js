var SQL = require('./db');
const path = require('path');
const csv=require('csvtojson');

const CreateTable = (req,res,next)=> {
    var Q1 = "CREATE TABLE TableA (UserName VARCHAR(255), UserPassword VARCHAR(255), TimeStamp TIMESTAMP)";
    SQL.query(Q1,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating TableA table"});
            return;
        }
        console.log('created TableA table table');
        res.send("TableA table created");
        return;
    })
    next;
          
}

const InsertData = (req,res)=>{
    var Q2 = "INSERT INTO users SET ?";
    const csvFilePath= path.join(__dirname, "data.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj); // for learning perpose
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
    var Q3 = "SELECT * FROM TableA";
    SQL.query(Q3, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing table ", err);
            res.send("error in showing table ");
            return;
        }
        console.log("showing table");
        res.send(mySQLres);
        return;
    })};

const DropTable = (req, res)=>{
    var Q4 = "DROP TABLE TableA";
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

