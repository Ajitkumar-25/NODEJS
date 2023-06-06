// const { MongoClient } = require("mongodb");
// // Connection URL
// const url= 'mongodb://0.0.0.0:27017/';

// const client = new MongoClient(url);

// // Database Name
// const dbName = "e-commerce";

// async function getdata() {
//   // Use connect method to connect to the server
//   let result = await client.connect();
//   let db = result.db(dbName);
//   let collection = db.collection("products");
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }

// getdata();

//another method

// const {MongoClient} = require('mongodb')
// const url= 'mongodb://0.0.0.0:27017/';
// const dbName='e-commerce'
// const client= new MongoClient(url);

// async function getData() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('products');
//   const product = await collection.find({}).toArray();
//   console.log(product);
// }
// getData();




// iske baad ka saara logiv connusingfunc.js file me likha hai 
// aur use yha pe import krr rha hu

const dbconnect=require('./connusingfunc');

//first method 

// dbconnect().then((resp)=>{
//   resp.find({}).toArray().then((data)=>{
//     console.log(data);
//   })
// })

//second method 

const main=async()=>{
  let data= await dbconnect();
  data=await data.find().toArray();
  console.log(data);

}
main();