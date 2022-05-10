const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the Recipe)
const RecipeSchema = new Schema({
    
  title: String,
  summary: String,
  body: String,
});

const CustomerSchema  = new Schema({
    
  name: String,
  comment: String,
});

// Create a model based on that schema
const Recipe = mongoose.model("Recipe", RecipeSchema);
const Customer = mongoose.model("Reviews", CustomerSchema);
 
 
// export the model
// module.exports =Recipe;
// module.exports =Customer;

module.exports = { Recipe, Customer};