const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files')
// console.log(dirPath);
// for(let i=0;i<=5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple txt file");
// }


//code to read file
fs.readdir(dirPath,(err,file)=>{
file.forEach((item)=>{
    console.log("file name is",item);
})
})

