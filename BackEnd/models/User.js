const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    genres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Genres_ua"
        }
    ],
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Books_ua"
        }
    ]
});
module.exports = mongoose.model("Users", UserSchema, "Users");