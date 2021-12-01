const express = require("express");
const app = express();

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
