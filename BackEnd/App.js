require('dotenv').config()

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const connectionString = process.env.DATABASE_URL
const PORT = process.env.SERVER_URI
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/book',require('./routes/BookRoutes'));
app.use('/user',require('./routes/UserRoutes'));


try {
app.listen(PORT, ()=> {
    console.log("Server listens");
})
} catch (error) {
    console.log(`Error: ${error.message}`)
}