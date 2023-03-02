const router = require("express").Router();
const { getBooks, getRandomBooksWithoutParam } = require("../controllers/BookControllers");

router.get("/all",getBooks);
router.get("/random_book_without_param",getRandomBooksWithoutParam);

module.exports = router