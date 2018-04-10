var express=require('express');
var mongoose=require('mongoose');
var app=express();
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/adhar');
var db=mongoose.connection;

app.use(bodyParser.json());

app.use('/',require('./routs/persion'));

app.listen(3000,function(){
    console.log("server at 3000");
});