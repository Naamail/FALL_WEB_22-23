const express = require('express');
const path = require('path');
const csv = require('csvtojson');
const port = 2020;

const app = express();
app.use(express.static(path.join(__dirname, "static")));
app.set('views', path.join(__dirname,"views"));
app.set("view engine", 'pug');

// simple route for home page
app.get('/', (req,res)=>{
    res.render('home');
});

app.get('/research', (req,res)=>{
    res.render('research');
});

app.get('/research2', (req,res)=>{
    //res.render('research');
    const csvPath = path.join(__dirname,"./content/research.csv");
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        //res.send("jason object created");
        res.render('research2', {
            var1: jsonObj
        })
    })
});




app.listen(port, ()=>{
    console.log("server is running on port ", port);
})

