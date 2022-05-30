const {status} = require('express/lib/response');
const res = require('express/lib/response');
const expenseService = require('./expense.service');

module.exports = {
    createExpense: async(req,res)=>{
        try{
            const payload = req.body;
            const expense = await expenseService.createExpense(payload);
            return res.status(201).send({
                success: true,
                meassge: "created expense successfully done",
                data: expense

            })

        }catch(err){
            return res.status(500).send({
                success: false,
                message:"An error occur"
            });

        }
    },
    getAllExpenses: async(req,res)=>{
        try{
        const expenses = await expenseService.getAllExpenses();
        return res.status(200).send({
            success: true,
            message: "getAllExpense api done successfully",
            data: expenses
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            message: "An error occur"
        });
    }
    
},
    updateExpense: async(req, res)=>{
        try{
            const expenseId = req.params.expenseId;
            const payload = req.body;
            const expense = await expenseService.expenseUpdate(expenseId,payload);
            return res.status(200).send({
                success: true,
                meassge: "expenseUpdate api done successfully",
                data: expense
            })

        }catch(err){
            console.log(err);
            return res.status(500).send({
                success: false,
                message: "An error occur"
            })
        }


    }

}