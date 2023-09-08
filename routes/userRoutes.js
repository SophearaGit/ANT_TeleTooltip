const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers")

router.get('/', userControllers.getAll)

module.exports = router;
