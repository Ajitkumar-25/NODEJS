const express = require("express");
require("./config");
const product = require("./mongoose_product");
const app = express();
app.use(express.json());

//search api
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key} },
      { brand: { $regex: req.params.key} },
      { launch: { $regex: req.params.key} }
    ],
  });
  res.send(data);
});

app.listen(5000);
