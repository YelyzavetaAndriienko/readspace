const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema ({
    title: {
        type: String
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Authors_ua"
        }
    ],
    genres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Genres_ua"
        }
    ]
});

const BookModel = new mongoose.model("Books_ua", BookSchema,"Books_ua" );

module.exports = {BookModel}