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

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const GenresSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const BookModel = new mongoose.model("Books_ua", BookSchema,"Books_ua" );
const AuthorModel = new mongoose.model("Authors_ua", AuthorSchema,"Authors_ua" );
const GenresModel = new mongoose.model("Genres_ua", AuthorSchema,"Genres_ua" );
module.exports = {BookModel, AuthorModel, GenresModel}