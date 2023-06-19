//Performing Curd operations

const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  launch: String,
});

//performing read in db
const ReadInDb = async () => {
    const Product = mongoose.model("Products", productSchema);
    const data = await Product.find({name:"lavax80"});
    console.log(data);
    }
    // ReadInDb();


//performing save in db
const SaveInDb = async () => {
  const Product = mongoose.model("Products", productSchema);
  const data = new Product({ name: "jiophone", brand: "jio", launch: "2023" });
  const result = await data.save();
  console.log(result);
};
// SaveInDb();

//performing update in db
const UpdateInDb = async () => {
  const Product = mongoose.model("Products", productSchema);
  const data = await Product.updateOne(
    { name: "jiophone" },
    { $set: { name: "jio phone 2" } }
  );
  console.log(data);
};

// UpdateInDb();

//performing delete in db
const DeleteInDb = async () => {
    const Product = mongoose.model("Products", productSchema);
    const data = await Product.deleteOne({ name: "jio phone 2",launch:"2021" });
    console.log(data);
    }
    // DeleteInDb()


