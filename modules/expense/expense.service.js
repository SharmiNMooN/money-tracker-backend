


const expenseModel = require('./expense.model');

module.exports = {
    async  createExpense(payload){
        return await expenseModel.create(payload);
    }
}
