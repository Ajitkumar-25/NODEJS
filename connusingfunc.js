//yeh code function me likha hai yeh mongoandnode ka continuation hai 

//another method here i am seperating tasks

const { MongoClient } = require("mongodb");
const url= 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);
const dbName = "e-commerce";
async function dbconnect() {
  let result = await client.connect();
  db = result.db(dbName);
  return db.collection('products');
  
}

module.exports=dbconnect;