var express=require('express');
var app =express();
var pm2=require('pm2');
console.log( express);
app.get('/',function(req,res){
    res.send("hello");
});

app.listen(process.env.port||3000,function(){
    console.log("server at 3000");
});