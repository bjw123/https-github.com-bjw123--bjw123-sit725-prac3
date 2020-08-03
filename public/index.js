const express=require("express");
let app=new express();

app.use(express.static("public"))

app.get("/weather",(req,res)=>{
    let weatherArray=["cloudy", "sunny", "rainy"]
    return Math.floor(Math.random() * Math.floor(2))
})
app.get('/',(req,res)=>{
    console.log("/ hit");
    res.send("hello ");
})


app.listen(3000,()=>{
    console.log("port started on 3000");
    })