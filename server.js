const express = require("express");
const app = express();

const d = new Date();
let day = d.getDay();
let hour = d.getHours();
const checkpointmiddleware = (req, res, next) => {
  let authorized = true;
  (day === 0 || day === 2 || day === 3 || day === 4 || day === 5) &&
  9 <= hour <= 16
    ? (authorized = true)
    : (authorized = false);
  authorized ? next() : res.status(401).send("you are not authorized");
};
app.use(checkpointmiddleware);
console.log(day);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});
app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/services.html");
});
/* app.get("/css/styles.css", (req, res) => {
  res.sendFile(__dirname + "/css/styles.css");
}); */
app.use(express.static(__dirname + "/"));

app.listen(5000, (err) =>
  err ? console.log(err) : console.log("server is running on port 5000")
);
