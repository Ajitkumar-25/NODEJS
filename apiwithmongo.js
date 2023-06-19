const express = require("express");
const dbconnect = require("./connusingfunc");
const app = express();
const mongodb=require('mongodb')

app.use(express.json());

app.get("/", async(req, resp) => {
    let db = await dbconnect();
    let data= await db.find().toArray();
    // console.log(data);
  resp.send(data);
});


app.post('/',async(req,resp)=>{
  let db=await dbconnect();
  let result=await db.insertOne(req.body);
  // console.log(req.body);
  resp.send(result);
})




//put api 
app.put('/',async(req,resp)=>{
  let db=await dbconnect();
  let result=await db.updateOne({name:"lavax80"},{$set:{launch:"2018"}});
  resp.send({result:"result"});
})

//delete api
app.delete("/:id",async(req,resp)=>{
  console.log(req.params.id)
  let db=await dbconnect();
  let result=await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
  resp.send(result);
})








app.listen(5000);