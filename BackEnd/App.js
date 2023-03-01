const express = require("express");

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const connectionString = "mongodb+srv://admin:admin@cluster0.tn0cl.mongodb.net/books-db?retryWrites=true&w=majority&authSource=admin";
const mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", async(req, res) => {
    console.log(req);
    return res.json("Books back End");
})

app.use(require("./routes/UserRoutes"))

app.listen(3001, function(err) {
    console.log("Server listens");
})