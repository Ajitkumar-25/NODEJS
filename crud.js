const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud');
const filepath=`${dirpath}/apple.txt`;

//write file
// fs.writeFileSync(filepath,'hello ji kya haal chaal');


//read file
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
// })


//append file
// fs.appendFile(filepath,'to kaise hai aap log',(err)=>{
//     if(!err)
//     console.log('file appended');
// })


//rename file here appple.txt is rename to orange .txt
fs.rename(filepath,`${dirpath}/orange.txt`,(err)=>{
    if(!err)
    console.log('file renamed');
})


//delete file here orange .txt is being deleted
fs.unlinkSync(`${dirpath}/orange.txt`,(err)=>{
    if(!err)
    console.log('file deleted');
})