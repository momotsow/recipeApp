const exp = module.exports = {};
const keystone = require('keystone');
const recipeModel = keystone.list('Recipe');
// const recipeFile = require('./mock/recipes.json.js');

exp.getAllRecipe = (req, res) => {
    recipeModel.model.find()
    .exec((err, result) => {
        if (err) return res.json({ err });
        return res.json(result);
    });
};

exp.getRecipeByID = (req, res) => {
    const id = req.params.id;

    recipeModel.model.findById(id)
    .exec((err, result) => {
        if (err) return res.json({ err });
        return res.json(result);
    });
};

