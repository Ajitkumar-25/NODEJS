const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    launch: String,
  });
  module.exports=mongoose.model('products',productSchema);