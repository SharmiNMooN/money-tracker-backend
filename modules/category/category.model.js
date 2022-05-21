const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String},
    categoryType: {type: mongoose.Schema.Types.String},
    userId: {type: mongoose.Schema.Types.String}
});
const categoryModel = mongoose.model("categories",categorySchema);
module.exports = categoryModel;