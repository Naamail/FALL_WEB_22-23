const sql = require('./db');

const createT1 = (req,res)=>{
    var Q1 = "CREATE TABLE IF NOT EXISTS `table2` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255)) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
    sql.query(Q1,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table"});
            return;
        }
        console.log('created table');
        res.render('index', {
            v1:"Table 1 created"
        });
        return;
    })

};

module.exports={createT1}