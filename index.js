var express=require('express');
let app=new express();
let mysql=require('mysql');
let config=require('./config');
let moment=require('moment');
var comp=require('compression');

app.use(compression())

app.listen('5000',function(){
console.log("Server details");
});

app.use('/api/getdata',function(req,res){
    console.log("getdata called");
    res.send({'status':200,'message':"Message from server side"+req.method});
    res.end();
})
