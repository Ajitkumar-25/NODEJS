const express = require("express");
const app = express();

//html and links example
app.get("", (req, res) => {
  res.send(`<h1>welcome to my home page</h1> <a href="/about">click here to go to about</a>`);
});
app.get("/about", (req, res) => {
  res.send(`<input type="text" placeholder="username" value="${req.query.name}"/>
            <input type="password" placeholder="password"/>
            <button type="submit">login</button>`);
  // res.send('welcome to my about page ');
});

//json example
app.get("/contact", (req, res) => {
  res.send([
    { name: "sai", age: 20 },
    { name: "ajeet", age: 21 },
    { name: "sai", age: 22 },
  ]);
});

app.get("/projects", (req, res) => {
  res.send("welcome to my projects page ");
});

app.listen(3000, () => {
  console.log("started at port 3000");
});
