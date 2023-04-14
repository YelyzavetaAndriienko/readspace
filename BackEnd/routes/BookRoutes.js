const router = require("express").Router();
const { getBooks, getRandomBooksForUser, getRandomBooksWithoutParam, getBookById, postBook } = require("../controllers/BookControllers");

router.get("/all",getBooks);
router.get("/random_book_without_param",getRandomBooksWithoutParam);
router.get("/randombook/:id", getRandomBooksForUser)
router.get("/:id",getBookById)
router.post("",postBook)

module.exports = router