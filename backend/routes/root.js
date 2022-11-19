const express = require("express")
const rootGet = require("../controllers/rootHandler")
const router = express.Router()

router.get("/", rootGet)

module.exports = router
