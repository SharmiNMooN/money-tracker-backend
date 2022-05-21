const express = require("express");

const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    return res.send({
        success: true,
        message: "welcome to money tracker service"
    });

});

app.listen(port,()=>{
    console.log(`server is running in port ${port}`);
})