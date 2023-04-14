const router = require("express").Router();
const {getOneUser,postUser,deleteUser, addGenre, getUserGenres, addBookForUser, getUserBooks, deleteUserBook} = require("../controllers/UserControllers")

router.post("/",postUser );
router.delete("/:email", deleteUser);
router.post("/login",getOneUser);

router.post("/addBook/:id", addBookForUser)
router.get("/getBooks/:id", getUserBooks)
router.delete("/deleteBook/:id", deleteUserBook )

router.post("/addGenres/:id",addGenre)
router.get("/getGenres/:id",getUserGenres)

module.exports = router;
