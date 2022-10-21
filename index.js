const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.status(200).json("Welcome to home");
});

app.listen(3000, () => {
  console.log("server runnint at 3000");
});
