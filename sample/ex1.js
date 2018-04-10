var express=require('express');
var mongoose=require('mongoose');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var people=require('./models/persion');
mongoose.connect('mongodb://localhost:27017/adhar');
var db=mongoose.connection;
app.get('/',function(req,res){
    res.send("hello venugopaal");
});

app.post('/insert',function(req,res){
    var persion=req.body;
    people.addPerson(persion,function(err,result){
        if(err){
            throw err;
        }else{
            res.json(result);
        }
    })
});

app.listen(3000,function(){
    console.log("server at 3000");
});