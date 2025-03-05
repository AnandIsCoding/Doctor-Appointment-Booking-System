import mongoose from "mongoose";
import doctorModel from "../models/doctor.model.js";
import chalk from "chalk";

// Fetch all doctors from MongoDB collection and return them as JSON response
export const getAllDoctorsController = async (req, res) => {
  try {
    const alldoctors = await doctorModel.find();
    res.status(200).json({
      success: true,
      data: alldoctors,
      message: "All Doctors Fetched Successfully",
    });
  } catch (error) {
    // Log the error message with a red background using Chalk
    console.error(
      chalk.bgRed(
        "Error in  getAllDoctorsController in doctor.controller.js ====>> ",
        error.message
      )
    );
    // Handle specific error if server connection is lost
    if (error.code === 'ECONNRESET') {
      return res.status(500).json({ success: false, message: "Server connection lost. Please retry." });
    }
    // send a genric internal server error
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const getDoctorByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    //  Check if ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Doctor ID" });
    }

    // Fetch doctor by ID from MongoDB collection
    const doctor = await doctorModel.findById(id);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Doctor Fetched by Id successfully ",
        doctor,
      });
  } catch (error) {
    // Log the error message with a red background using Chalk
    console.error(
      chalk.bgRed(
        "Error in  getDoctorByIDController in doctor.controller.js ====>> ",
        error.message
      )
    );
    // Handle specific error if server connection is lost
    if (error.code === 'ECONNRESET') {
      return res.status(500).json({ success: false, message: "Server connection lost. Please retry." });
    }
    // send a genric internal server errror

    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
