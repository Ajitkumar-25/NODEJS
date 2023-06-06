const express = require("express");
const dbconnect = require("./connusingfunc");
const app = express();
app.get("/", async(req, resp) => {
    let db = await dbconnect();
    let data= await db.find().toArray();
    console.log(data);
  resp.send(data);
});
app.listen(5000);
