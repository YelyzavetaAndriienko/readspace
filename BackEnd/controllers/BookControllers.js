const {BookModel} = require("../models/Book");

const getBooks = async (req, res) => {
    await BookModel.find((err, books) => {
        if (err) {
            res.send(err);
        }
        res.json(books);
    });
};

const getRandomBooksWithoutParam = async (req, res) => {
    const myRandomBook = BookModel.aggregate( [{$sample:{size:1}}])


    const forRes = []
    for await (const book of myRandomBook){
        forRes.push(book)
    }
    res.json(forRes)
};

module.exports = {
    getBooks, getRandomBooksWithoutParam
};