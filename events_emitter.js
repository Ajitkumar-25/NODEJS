const express=require('express')
const EventEmitter=require("events")
const app=express();
const event=new EventEmitter();
let count=0;
event.on("countAPI",()=>{
    count++;
    console.log("event call hua hai ",count);
})

app.get("/",(req,res)=>{
    res.send("api called")
    event.emit("countAPI")
});

app.get("/search",(req,res)=>{
    res.send(" search api called")
});

app.get("/update",(req,res)=>{
    res.send(" update api called")
});


app.listen(5000);