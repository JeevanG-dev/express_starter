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
}

next()

}