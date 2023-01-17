const express = require('express');
const path = require('path');
const csv = require('csvtojson');
const cookieParser = require('cookie-parser');
const port = 2020;

const app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(cookieParser())
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');


// Routing
app.get('/', (req,res)=>{
    res.render('home');
    console.log('this is my cookie: ', req.cookies);
    //res.send('hi home page');
});

app.get('/items', (req,res)=>{
    res.render('items');
    //res.send('hi items page');
});

app.get('/items2', (req,res)=>{
    //res.render('research');
    const csvPath = path.join(__dirname,"./content/research.csv");
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        //res.send("jason object created");
        res.render('items2', {
            var1: jsonObj
        })
    })
});


app.get('/setCookie', (req,res)=>{
    res.cookie('user name','Naama Ilany-Tzur');
    res.send('Cookie have been saved successfully');
})

// set up listen
app.listen(port, ()=>{
    console.log('server is running on port ', port);
});
