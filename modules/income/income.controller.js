const incomeService = require("./income.service");


module.exports = {
        createIncome: async(req, res)=>{
            try{
                const payload = req.body;
                console.log(payload);
                const income = await incomeService.createIncome(payload);
                return res.status(200).send({
                    success: true,
                    message: "Created income successfully done",
                    data: income
                })


            }catch (err){
                console.log('error happen in create income:', err);
                return res.status(500).send({
                    success: false,
                    message: "An error occur",
                    error: err.message
                
                });
            }
        }
            
   }