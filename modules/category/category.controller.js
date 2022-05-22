const categoryService = require('./category.service');

module.exports = {
    createCategory: async(req,res)=>{
        try{
            const payload = req.body;
            console.log(payload);
            const category = await categoryService.createCategory(payload);
            return res.status(201).send({
                succes: true,
                message: "Category created successfully",
                data: category
            })

        
        }catch(err){
            return res.status(500).send({
                success: false,
                message: "An error occur"
            });
        }
    },

    async getAllCategories(req, res){
        try{

            const categories = await categoryService.getAllCategories();
            return res.status(200).send({
                success:true,
                message:"categories get successfully",
                data: categories
            })

        } catch(err){
            return res.status(500).send({
                success: false,
                message: "An error occur"
            });

        }

    }
}