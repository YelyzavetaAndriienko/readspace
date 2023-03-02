const router = require("express").Router();
const {getOneUser,postUser,deleteUser} = require("../controllers/UserControllers")

router.post("/",postUser );
router.delete("/:email", deleteUser);
router.get("/",getOneUser );

module.exports = router;
