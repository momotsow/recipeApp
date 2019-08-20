const express = require("express");
const router = express.Router();
const getModule = require("./recipe-get");
const addRecipeModule = require("./recipe-add");

router.get("/", getModule.getAllRecipe);

router.post("/", addRecipeModule);

router.get("/:id", getModule.getRecipeByID);

module.exports = router;
