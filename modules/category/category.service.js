const categoryModel = require("./category.model");

module.exports = {

   async createCategory(payload){
        return await categoryModel.create(payload);
    },
    async getAllCategories() {
        return await categoryModel.find()

    }

    
};
