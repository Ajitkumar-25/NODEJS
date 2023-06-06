// update data in mongo db 
const dbconnect = require("./connusingfunc");
const update = async () => {
  const db = await dbconnect();
  const result = await db.updateOne(
    { name: "14promax" },
    { $set: { name: "15promax", brand: "iphone", launch: "2020" } }
  );
  if (result.acknowledged) {
    console.log("data is updated");
  }
};
update();
