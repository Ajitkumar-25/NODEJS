//delete data from mongodb
const dbconnect = require("./connusingfunc");
const del = async () => {
  const db = await dbconnect();
  const result = await db.deleteOne({ name: "15promax" });
  if (result.acknowledged) {
    console.log("data is deleted");
  }
};
del();
