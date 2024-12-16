import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    productName:{
        type:String,
        required:[true, "Product must be required"],
        trim:true

    },
    description:{
        type:String,
        required:true,
    },
    productImage:{
        type:String
    },
    price:{
        type:Number,
        required:[true,'Product Price must required']
    },

    catergory:{
        type:String,
        enum:['veg','non-veg','drink', 'sides'],
        default:'veg'
    },
    inStock:{
        type:Boolean,
        required:[true,'In Stock is Required'],
        default:true,
    }

},
{
timestamp:true,
}

)


export const Product = mongoose.model("products", productSchema)
