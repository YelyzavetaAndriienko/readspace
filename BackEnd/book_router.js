const router = require("express").Router();
const { getBooks, getRandomBooksWithoutParam } = require("./book_controller");

router.get("/books",getBooks);
router.get("/random_book_without_param",getRandomBooksWithoutParam);

module.exports = router