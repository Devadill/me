const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.engine("html", require("ejs").renderFile)
app.set("trust proxy", true)
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")))
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
  res.render("index");
})

app.use(function (req, res) {
    res.status(404).redirect('/')
})

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
})
