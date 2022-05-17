const express = require("express")
const router = express.Router()

const BacklogController = require("../controllers/backlog")

router.get("/all", BacklogController.All)
router.post("/add", BacklogController.Add)
router.post("/remove", BacklogController.Remove)
router.post("/start_playing", BacklogController.StartPlaying)
router.post("/play_later", BacklogController.PlayLater)

module.exports = router
