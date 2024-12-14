import mongoose from "mongoose";
import { MONGO_DB } from "./serverConfig.js";

//the below function helps us to connect to the mongoDB 


 export async function connectDB(){

    try {

        await mongoose.connect(MONGO_DB)

        console.log("successfully connect to mongo DB");
        
        
    } catch (error) {
     console.log("couldn't connect");
     console.log(error);
     
     
    }
}