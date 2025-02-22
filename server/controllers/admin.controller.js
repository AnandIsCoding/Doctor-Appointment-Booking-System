import chalk from "chalk";
import { v2 as Cloudinary } from "cloudinary";
import doctorModel from "../models/doctor.model.js";
import bcrypt from "bcrypt";

// import helperfunction
import {
  uploadFileToCloudinary,
  isFileTypeSupported,
} from "../utils/helpers.utils.js";

export const registerDoctorController = async (req, res) => {
  // create doctor document in the database
  try {
    const {
      name,
      specialization,
      qualification,
      experience,
      contact,
      email,
      password,
      location,
      consultationFee,
      rating,
      about,
      availability,
    } = req.body;
    const image = req.file;
    // checkif any feild missing in request body
    if (
      !name ||
      !image ||
      !specialization ||
      !qualification ||
      !experience ||
      !contact ||
      !email ||
      !password ||
      !location ||
      !consultationFee ||
      !rating ||
      !about ||
      !availability
    ) {
      return res
        .status(400)
        .json({
          success: false,
          error: "Missing required field",
          message: "Missing Required Field",
        });
    }
    // //check if doctor with the same email already exists
    const doctorWithSameEmailExist = await doctorModel.findOne({ email });
    if (doctorWithSameEmailExist) {
      return res
        .status(409)
        .json({
          success: false,
          error: "Doctor already exists",
          message: "Doctor already exists",
        });
    }

    // //file validation
    const supportedTypes = ["jpeg", "jpg", "png"];
    const fileType = image.originalname.split(".").pop().toLowerCase(); // If the filename has multiple dots (my.profile.png), it will correctly extract the last extension.

    // if fileType is not supported
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Invalid File type only jpg jpeg and png supported",
          error: "Invalid File type only jpg jpeg and png supported",
        });
    }

    //if file type supported truw than only further code execute
    const response = await uploadFileToCloudinary(
      image.path,
      "Doctor-Appointment-Booking-System"
    );
    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create new doctor in doctor collection, db
    const doctor = await doctorModel.create({
      name,
      specialization,
      qualification,
      experience,
      contact,
      email,
      location,
      consultationFee,
      rating,
      about,
      availability,
      password: hashedPassword,
      image: response.secure_url,
    });

    // success response
    return res.status(201).json({
      success: true,
      message: "Doctor Registered Successfully",
      data: doctor,
    });
  } catch (error) {
    // Error handling, error response
    if (error.name === "ValidationError") {
      // Extract validation messages
      const messages = Object.values(error.errors).map((err) => err.message);
      console.error(chalk.bgRed("Validation Error =>>>"), messages);
      return res
        .status(400)
        .json({
          success: false,
          message: "Validation Error",
          error: messages[0],
        });
    }
    console.error(
      chalk.bgRed(
        "Error in registerDoctorController in admin.controller.js ====>> ",
        error.message
      )
    );
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
