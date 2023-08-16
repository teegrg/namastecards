//DEPENDENCIES
const cors = require("cors");
const express = require("express");

//CONFIGURE 
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTE
app.get("/", (req, res) => {
    res.status(200).send("wellcome")
})

//404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("ooops, page not found")
})

//EXPORT
module.exports = app;
