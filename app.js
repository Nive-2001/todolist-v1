const express=require("express");
const bodyParser=require("body-parser");
const e = require("express");
const date=require(__dirname+"/date.js");

const app=express();


let items=["buy food","cook food","eat food"];
let workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

    let day= date.getDate();
    res.render("list",{listTitle: day,newListItem: items});
    
});
app.post("/",function(req,res){
    // console.log(req.body.list);
    let item=req.body.newItem;
    if(req.body.list === "work Lists"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
   
});
app.get("/work",function(req,res){

    res.render("list",{listTitle:"work Lists",newListItem:workItems})
});

app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
    console.log("server starting running");
});