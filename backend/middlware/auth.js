const jwt=require("jsonwebtoken");
require("dotenv").config();
const islogedin=(req,res,next)=>{
    try {
        // console.log(req.headers);
        let to=req.headers.authorization;
        if (!to){
            return res.json({
                success:false,
                message:"token doesn't exist please log in ",
            })
        }
        let token=to.replace("Bearer ","");
        
        // find payload value from the token
        let payload ;
        try {
            payload=jwt.verify(token,process.env.JWT_SECRET);
        } catch (error) {
            return res.json({
                message:"invalid token",
                success:false,
            })
        }
        req.user=payload;
        next();
    } catch (error) {
        console.log("error in islogedin middleware");
        console.log(error);
    }
}

module.exports={islogedin};