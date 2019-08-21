var keystone = require('keystone'),

Recipe = keystone.list('Recipe');

/**
 * List Recipe
 */
exports.list = function(req, res) {
    Recipe.model.find(function(err, items) {
  
      if (err) return res.json({ err: err });
  
      res.json({
        recipe: items
      });
  
    });
  }
  
  /**
   * Get Recipe by ID
   */
  exports.get = function(req, res) {
    Recipe.model.findById(req.params._id).exec(function(err, item) {
  
      if (err) return res.json({ err: err });
      if (!item) return res.json('not found');
  
      res.json({
        recipe: item
      });
  
    });
  }
  
  
  /**
   * Create a Recipe
   */
  exports.create = function(req, res) {
  
   const item = new Recipe.model(),
      data = (req.method == 'POST') ? req.body : req.query;
  
    item.getUpdateHandler(req).process(data, function(err) {
  
      if (err) return res.json({ error: err });
  
      res.json({
        recipe: item
      });
  
    });
  }
  
  /**
   * Patch Recipe by ID
   */
  exports.update = function(req, res) {
  
    Recipe.model.findById(req.params.id).exec(function(err, item) {
  
      if (err) return res.json({ err: err });
      if (!item) return res.json({ err: 'not found' });
  
     const data = (req.method == 'PUT') ? req.body : req.query;
  
      item.getUpdateHandler(req).process(data, function(err) {
  
        if (err) return res.json({ err: err });
  
        res.json({
            recipe: item
        });
  
      });
  
    });
  }
  
  /**
   * Delete Recipe by ID
   */
  exports.remove = function(req, res) {
    Recipe.model.findById(req.params._id).exec(function (err, item) {
  
      if (err) return res.json({ dberror: err });
      if (!item) return res.json('not found');
  
      item.remove(function (err) {
        if (err) return res.json({ dberror: err });
  
        return res.json({
          success: true
        });
      });
  
    });
  }
 