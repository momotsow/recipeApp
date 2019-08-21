const express = require("express");
const router = express.Router();
const addModule = require("./contact-add");

router.post("/", [], addModule);

module.exports = router;
