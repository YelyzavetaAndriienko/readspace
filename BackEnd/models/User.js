const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    email: String,
    password: String
});
module.exports = mongoose.model("Users", UserSchema, "Users");