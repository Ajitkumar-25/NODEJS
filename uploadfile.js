const express=require('express');
const multer = require('multer');
const app=express();

const upload=multer({
    Storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'uploads')
        },
        filename:(req,file,cb)=>{
            cb(null,file.originalname +"-"+Date.now()+".jpg")
        }
    })
}).single("user_file");

//upload api
app.post('/upload',upload,(req,res)=>{

    res.send("uploaded ");
});

app.listen(5000);