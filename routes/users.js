const express = require("express")
const router = express.Router()

const UsersController = require("../controllers/users")

router.get("/all", UsersController.All)
router.get("/find", UsersController.Find)
router.post("/new", UsersController.New)

module.exports = router
