import express from "express";
import { PORT } from "./config/serverConfig.js";
import { connectDB } from "./config/dbConfig.js";


const app = express()



 


// 98.5.12.6:5500 -> socket address
app.listen(PORT, async ()=>{
    await connectDB()
    console.log("Listerning to", PORT)
   
    
}) 


