const express=require('express');
require("./config");
const product=require('./mongoose_product');
const app=express();
app.use(express.json());//iska kaam tab ata hai jab neeche req me body likhte

//post api 
app.post("/create",async(req,resp)=>{
    let data=new product(req.body);
    let result=await data.save();
    console.log(result);
    resp.send(result);;
    // console.log(req.body);
    // resp.send("done");
});


//get api
app.get("/get",async(req,resp)=>{
    let result=await product.find();
    resp.send(result); 
}
);

//delete api
app.delete("/delete/:id",async(req,resp)=>{
    let result=await product.deleteOne({_id:req.params.id});
    resp.send(result);
}
);

//put api
app.put("/update/:id",async(req,resp)=>{
    let result=await product.updateOne({_id:req.params.id},req.body);
    resp.send(result);
    console.log(result);
}
);




app.listen(5000);
