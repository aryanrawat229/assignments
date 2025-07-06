const express = require("express");
const EventEmitter = require("events");

const app = express();
const event = new EventEmitter();
let count = 0;

event.on("counter", () => {
  count++;
  console.log("Count API hit: " + count);
});

app.get("/", (req, resp) => {
  event.emit("counter");
  resp.send("API hit at home page");
});

app.get("/user", (req, resp) => {
  event.emit("counter");
  resp.send("API hit at user page");
});

app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});