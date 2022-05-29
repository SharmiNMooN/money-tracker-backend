

const incomeModel = require('./income.model');
module.exports = {
    async  createIncome(payload){
        return await incomeModel.create(payload);
    }
}