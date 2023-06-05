const express=require('express')
const app=express();
app.get('',(req,res)=>{
    res.send('welcome to my home page ');
})
app.get('/about',(req,res)=>{
    res.send('welcome to my about page ');
})
app.get('/contact',(req,res)=>{
    res.send('welcome to my contact page ');
})
app.get('/projects',(req,res)=>{
    res.send('welcome to my projects page ');
})

app.listen(8000,()=>{
    console.log("started at port 8000");
})