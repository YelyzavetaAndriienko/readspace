const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const router = require("./book_router")
const dotenv = require("dotenv")
dotenv.config()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const connectionString = "mongodb+srv://admin:admin@cluster0.tn0cl.mongodb.net/books-db?retryWrites=true&w=majority&authSource=admin";
const mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


// app.get("/", async(req, res) => {
//     return res.json("Books back End");;
// })



app.use(router)

app.listen(3001, function(err) {
    console.log("Server listens");
})