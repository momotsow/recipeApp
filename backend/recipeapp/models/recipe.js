var keystone = require ('keystone');
var Types = keystone.Field.Types;

/**
 * Recipe Model
 * ==========
 */

var Recipe = new keystone.List('Recipe', {
    map: {name: 'title'},
    singular: 'Recipe',
    plural: 'Recipes',
    autokey: {path: 'slug', from: 'title', unique: true}
});

Recipe.add({
    title: { type: String, required: true },
    description: {type: Types.Textarea},
    ingredients: { type: Types.Markdown, min: 10, max: 2000 },
    // method:{ type: Types.Textarea },
    heroImage: { type: Types.CloudinaryImage },
    image: { type: Types.CloudinaryImage },
    publishDate: {type: Date, default: Date.now}
//     content: {
//     brief: { type: Types.Html, wysiwyg: true, height: 150 },
//     extended: { type: Types.Html, wysiwyg: true, height: 400 }
//   }
});
Recipe.schema.virtual('canAccessKeystone').get(function () {
    return true;
  });
  
  Recipe.schema.pre('save', function (next) {
    let event = this;
    if (event.isModified('published') && event.published) {
      this.publishDate = Date.now();
    }
    return next();
  });
  
Recipe.defaultColumns = 'name, description';
Recipe.register();
