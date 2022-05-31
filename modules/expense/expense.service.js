const { expenseUpdate } = require('../expense/expense.service');

const { getAllExpenses, removeExpense } = require('./expense.controller');
const expenseModel = require('./expense.model');

module.exports = {
    async createExpense(payload) {
        return await expenseModel.create(payload);
    },
    async getAllExpenses() {
        return await expenseModel.find();
    },
    async expenseUpdate(expenseId, payload) {
        return await expenseModel.findOneAndUpdate({ _id: expenseId }, payload, { new: true });
    },
    async deleteExpense(expenseId) {
        return await expenseModel.findOneAndRemove({ _id: expenseId });
    },
};
