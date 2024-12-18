import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/serverConfig.js'

export async function isLoggedIn(req,res,next){

    const tokken = req.cookies['authToken']
    if(!tokken) return res.status(401).json({
        success:false,
        data:{},
        error: "Not authenticated",
        message:"No auth Token Provided"
    })



try {
    

    const decoded = jwt.verify(tokken, JWT_SECRET)

if(!decoded) return res.status(401).json({
    success:false,
    data:{},
    error: "Not authenticated",
    message:"invalid tokken provideed"
})

req.user = {
    email : decoded.email,
    id:decoded.id,
    role: decoded.role
}

next()

} catch (error) {
    
 res.status(400).json({
    message:"Token Expired"
 })
}



}

export  function isAdmin(req,res,next){


const loggedInUser = req.user;

if(loggedInUser.role === "ADMIN"){
    next()
}

else{
    return res.status(401).json({
        message:"You are not authorized for this action",
    
    })
    
}


}