const { deleteCategory } = require('./category.controller');
const categoryModel = require('./category.model');

module.exports = {
    async createCategory(payload) {
        return await categoryModel.create(payload);
    },
    async getAllCategories() {
        return await categoryModel.find();
    },
    async updateCategory(categoryId, payload) {
        return await categoryModel.findOneAndUpdate({ _id: categoryId }, payload, { new: true });
    },
    async deleteCategory(categoryId) {
        return await categoryModel.findOneAndRemove({ _id: categoryId });
    },
};
