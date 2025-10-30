const express = require("express")
const router = express.Router()

// impor playlistController
const playlistController = require("../controllers/playlistController")

router.get("/", playlistController.getAllPlaylist)
router.post("/", playlistController.createPlaylist)
router.get("/:id", playlistController.getPlaylistById)
router.delete("/:id", playlistController.deletePlaylistById)
router.put("/:id", playlistController.updatePlaylistById)

// export module
module.exports = router
