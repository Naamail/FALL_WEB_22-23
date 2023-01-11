const sql = require('./db');

const insertNewSignIN = (req,res)=>{
    // validate body exists
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }
    // insert input data from body into json
    const NewSignUp = {
        "email": req.body.SignUpEmail,
        "name": req.body.SignUpName
    }
    // run qury
    const Q1 = 'INSERT INTO customers SET ?';
    sql.query(Q1, NewSignUp, (err, mysqlres) =>{
        if (err) {
            console.log("error: error: ", err);
            res.status(400).send({message:"couild not sign in"});
            return;
        }
        console.log("created customer: ", {id: mysqlres.insertid});
        res.send({message: "you just signed in successfuly"});
        return;
    })
};

const showAll = (req,res)=>{
    const Q2 = "SELECT * from customers";
    sql.query(Q2, (err, mysqlres)=>{
        if (err) {
            res.status(400).send("error");
            return;
        };
        //res.send(mysqlres);
        const t = new Date();
        res.render('results', {
            v1:'Customers',
            v2:t,
            mysqlresArray:mysqlres
        })
        return;
    });
};

const findUser = (req,res)=>{
    // validate body exists
    if (!req.body) {
        res.status(400).send({message: "please fill user name to search"});
        return;    }
    // pull data from body
    const user = req.body.SearchName;

    // run query
    const Q3 = "SELECT * FROM customers where name like ?";
    sql.query(Q3, user + "%", (err, mysqlres)=>{
        if (err) {
            console.log("error: error: ", err);
            res.status(400).send({message:"could not search customer"});
            return;
        }
        console.log("found user: ", mysqlres);
        res.send(mysqlres);
        return;
    })
}

module.exports = {insertNewSignIN, showAll, findUser};