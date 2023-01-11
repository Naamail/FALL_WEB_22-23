const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const port = 8080;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static('static'));
//set up view engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home page route
app.get("/", (req,res)=>{
    //res.send("hello pug");
    res.render('index',{
        V1: 'PUG intro',
        V2: 'Pug enables dynamic client side HTML rendering'
    });
});

// page2  route
app.get("/page2", (req,res)=>{    
    res.render('index',{
        V1: 'PUG sytax',
        V2: 'look it up in google'
    });
});

// page3  route
app.get("/page3", (req,res)=>{    
    res.render('index',{
        V1: 'PUG documentatio',
        V2: 'look it up in google'
    });
});


// set listen
app.listen(port, ()=>{
    console.log("server is running on port ", port);
})