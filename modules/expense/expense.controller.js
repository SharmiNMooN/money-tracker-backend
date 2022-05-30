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
    }

}