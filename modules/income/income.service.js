
const { updateCategory } = require('../category/category.service');
const { getAllIncomes, updateIncome } = require('./income.controller');
const incomeModel = require('./income.model');
module.exports = {
    async  createIncome(payload){
        return await incomeModel.create(payload);
    },
    async getAllIncomes(){
        return await incomeModel.find()
    },
    async updateIncome(incomeId, payload){
        return await incomeModel.findOneAndUpdate({_id:incomeId}, payload, {new: true});
    },
    async deleteIncome(incomeId){
        return await incomeModel.findOneAndRemove({_id:incomeId});
    }
}