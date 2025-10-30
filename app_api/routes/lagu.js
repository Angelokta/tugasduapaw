const express = require("express")
const router = express.Router()

// impor laguController
const laguController = require("../controllers/laguController")

router.get("/", laguController.getAllLagu)
router.post("/", laguController.createLagu)
router.get("/:id", laguController.getLaguById)
router.delete("/:id", laguController.deleteLaguById)
router.put("/:id", laguController.updateLaguById)

// export module
module.exports = router
