const express=require('express')
const path=require('path')
const app=express()
const publicpath=path.join(__dirname,'public');
//here we have used path of public folder to execute files present in public folder in the browser
// app.use(express.static(publicpath))

//another method to remove url extension problem 
app.get('/',(_,resp)=>{
    resp.sendFile(`${publicpath}/index.html`)
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
})
app.listen(5000);