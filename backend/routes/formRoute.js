const express = require("express")
const { formPost } = require("../controllers/formHander")
const router = express.Router()

router.route("/").post(formPost)

module.exports = router
