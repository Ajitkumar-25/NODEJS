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


//here i am using ejs package to make profile page stored in views folder
app.set('view engine','ejs');
app.get('/profile',(_,resp)=>{
    const user={
        name:'ajit',
        batch:'b9',
        enrollno:"21103317",
        skills:['c++','java','php','mysql']
    }
    resp.render('profile',{user})
})


app.get('/login',(_,resp)=>{
    resp.render('login')
})





app.listen(5000);



