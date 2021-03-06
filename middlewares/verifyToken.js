const jwt=require("jsonwebtoken")

const validateToken=(req,res,next)=>{
    //extract token from header from req obj
    let tokenwithBearer=req.headers['authorization']

    if(tokenwithBearer==undefined){
        res.send({message:"failed", reason:"Please login"})
    }
    else{
       // get token from bearer token
       let token=tokenwithBearer.slice(7,tokenwithBearer.length)
       //verify token
       jwt.verify(token,"khswteni6",(err,decodetoken)=>{
           if(err){
               res.send({message:"failed",reason:"session expired"})
           }
           else{
               next();
           }
       })
    }

}

module.exports=validateToken;