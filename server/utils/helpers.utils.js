import { v2 as cloudinary } from "cloudinary";

export const uploadFileToCloudinary = async (imagePath, folder) => {
    const options = { folder };
    return await cloudinary.uploader.upload(imagePath, options); // Use imagePath instead of image.tempFilePath
};


export const isFileTypeSupported = (type, supportedTypes) =>{
    return supportedTypes.includes(type) // will return true or false, if supported than true otherwise false
}