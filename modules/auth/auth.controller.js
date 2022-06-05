module.exports = {

    registerUser: async(req,res)=>{
        try{
            //1.1payload validation
            const payload = req.body;
            //firstName,lastName,phoneNumber,email,password
            if(!payload.firstName || !payload.lastName){
                return res.status(422).send({
                    success: false,
                    message:"FirstName and lastName requird"

                });
            }
            //check email valid or not
            if(!payload.email){
                return res.status(422).send({
                    success: false,
                    message: "email is requird"

                })
            }
            


            //2.check user is already exit or not (email or phoneNumber)
            //3.hash password using bcrypt.js
            //4.save user to database
            //5.return res with success

        }catch(err){
            return res.status(500).send({
                success: false,
                message:"An error occur"
            });

        }

    }
}