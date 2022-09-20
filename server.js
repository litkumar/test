const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
	res.send("the sum is "+(parseInt(req.body.num1)+parseInt(req.body.num2)));
	// res.send("hello");
});


app.get("/multiply",function(req,res){
	res.sendFile(__dirname+"/multiply.html");
});
app.post("/multiply",function(req,res){
	res.send("the multiply is "+(parseInt(req.body.num1)*parseInt(req.body.num2)));
});

app.listen(3000,function(){
	console.log("Server started on port 3000");
});

