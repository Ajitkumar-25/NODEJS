const dbconnect = require("./connusingfunc");
const insert = async () => {
  const db = await dbconnect();
  const result = await db.insertOne({
    name: "18promax",
    brand: "iphone",
    launch: "2018"
  });
  if (result.acknowledged) {
    console.log("data is inserted");
  }
};
insert();
