const sql = require('./db');

const select_all = (req,res)=>{
    const Q2 = "SELECT * from customers";

    sql.query(Q2, (err, mysqlres)=>{
        if (err) {
            res.status(400).send("error");
            return;
        };
        //res.send(mysqlres);
        res.render('mysqlres', {
            v1: 'All users',
            pple: mysqlres
        })
        return;
    });
};

module.exports= {select_all}