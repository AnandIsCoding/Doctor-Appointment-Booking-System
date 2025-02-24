import doctorModel from "../models/doctor.model.js"
import chalk from "chalk"
export const getAllDoctorsController = async(req,res) =>{
    try {
        const alldoctors = await doctorModel.find();
        res.status(200).json({success:true, data:alldoctors, message:'All Doctors Fetched Successfully'})
    } catch (error) {
        console.error(
            chalk.bgRed(
              "Error in  getAllDoctorsController in doctor.controller.js ====>> ",
              error.message
            ))
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}



