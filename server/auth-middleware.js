const jwt = require("jsonwebtoken");
const user = require("./models/registereduser");

const authmiddleware = async(req, res, next)=>{

    const token = req.header("Authorization");

    if(!token){

        return res
        .status(401)
        .json({message :" Unauthorized HTTP , Token not provided"});
    }
    const jwtToken = token.replace("Bearer","").trim();
    console.log("token from auth middleware", jwtToken);

    try {

        const isVerified = jwt.verify( jwtToken, process.env.JWT_SECRET_KEY);
        const userData =  await user.findOne({ email : isVerified.email}).
        select({
            password : 0,
        });
        console.log(userData);
        req.user = userData;
        req.token=token;
        req.userId= userData._id;

       

        next();
    } catch (error) {
        return res.status(401).json({ message:"Unauthorized  , Token Invalid"});
        
    }

  
};


module.exports= authmiddleware;