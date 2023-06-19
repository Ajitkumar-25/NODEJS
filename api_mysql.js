const express = require("express");
const app = express();
const connection = require("./config_mysql");
app.use(express.json());


//get api mysql
app.get("/", (req, resp) => {
  connection.query("select * from customer", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
      // console.log(result);
    }
  });
});


//post api

app.post("/", (req, resp) => {
  const data = { id: 5, name: "ajjubhai", department: "cardio", salary: 98765 };
  connection.query(
    "INSERT INTO customer SET ?",
    data,
    function (error, result, fields) {
      if (error) {
        resp.send("error");
      } else {
        resp.send(result);
      }
    }
  );
});

//put api
app.put("/", (req, resp) => {
  const data = ["kritika","hilihili",23456,4]
  connection.query(
    "UPDATE customer SET name = ?, department = ?, salary = ? WHERE id = ?",
    data,
    (error, result, fields) => {
      if (error) {
        resp.send("error");
      } else {
        resp.send(result);
      }
    }
  );
});



// delete api
app.delete("/", (req, resp) => {
    const data=[5];
    connection.query(
        "DELETE FROM customer WHERE id = ?",
        data,
        (error, result, fields) => {
            if (error) {
                resp.send("error");
            } else {
                resp.send(result);
            }
        }
    );
});



app.listen(5000);
