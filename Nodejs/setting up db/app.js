const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  console.log("Hello world");
  res.send("Welcome to the Express server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});