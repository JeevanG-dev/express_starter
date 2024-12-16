import cloudinary from 'cloudinary'
import { CLOUDINARY_APP_KEY, CLOUDINARY_APP_NAME, CLOUDINARY_APP_SECRET } from './serverConfig.js'

//configuring cloudinary

export const cloud = cloudinary.v2

cloud.config({
    cloud_name:CLOUDINARY_APP_NAME,
    api_key:CLOUDINARY_APP_KEY,
    api_secret:CLOUDINARY_APP_SECRET,
})



