const { status } = require('express/lib/response');
const res = require('express/lib/response');
const incomeService = require('./income.service');

module.exports = {
    createIncome: async (req, res) => {
        try {
            const payload = req.body;
            console.log(payload);
            const income = await incomeService.createIncome(payload);
            return res.status(200).send({
                success: true,
                message: 'Created income successfully done',
                data: income,
            });
        } catch (err) {
            console.log('error happen in create income:', err);
            return res.status(500).send({
                success: false,
                message: 'An error occur',
                error: err.message,
            });
        }
    },
    getAllIncomes: async (req, res) => {
        try {
            const incomes = await incomeService.getAllIncomes();
            return res.status(200).send({
                success: true,
                message: 'getAllIncomes successfully',
                data: incomes,
            });
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: 'An error occur',
            });
        }
    },
    updateIncome: async (req, res) => {
        try {
            const incomeId = req.params.incomeId;
            const payload = req.body;
            const income = await incomeService.updateIncome(incomeId, payload);
            return res.status(200).send({
                success: true,
                message: 'incomeId updated successsfully',
                data: income,
            });
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: 'An error occur ',
            });
        }
    },
    removeIncome: async (req, res) => {
        try {
            const incomeId = req.params.incomeId;
            const income = await incomeService.deleteIncome(incomeId);
            return res.status(200).send({
                success: true,
                message: 'incomeId delete successfully',
                data: income,
            });
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: 'An error occur',
            });
        }
    },
};
