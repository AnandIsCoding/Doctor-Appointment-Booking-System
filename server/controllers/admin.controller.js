import chalk from "chalk";
import doctorModel from "../models/doctor.model.js";
import serviceModel from "../models/service.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      return res.status(400).json({
        success: false,
        error: "Missing required field",
        message: "Missing Required Field",
      });
    }

    // 🔹 Password Validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        success: false,
        error: "Invalid password format",
        message:
          "Password must be at least 5 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&).",
      });
    }

    // //check if doctor with the same email already exists
    const doctorWithSameEmailExist = await doctorModel.findOne({ email });
    if (doctorWithSameEmailExist) {
      return res.status(409).json({
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
      return res.status(400).json({
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
      return res.status(400).json({
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

export const loginAdminController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if is password undefined
    // console.log(email + " " + password);
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    //create a jwt token nd add it to cookie, and send to user
    const admintoken = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: "8d",
    });
    return res
      .status(200)
      .json({ success: true, message: "Admin Login Successfull", admintoken });
  } catch (error) {
    console.error(
      chalk.bgRed(
        "Error in loginAdminController in admin.controller.js ====>> ",
        error.message
      )
    );
    if (error.code === 'ECONNRESET') {
      return res.status(500).json({ success: false, message: "Server connection lost. Please retry." });
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};



export const addNewServiceController = async(req,res) =>{
  try {
    const {name} = req.body;
    const image = req.file;
    if(!name || !image){
      return res.status(400).json({
        success: false,
        error: "Missing required field",
        message: "Missing Required Field",
      });
    }
     // check if service already registered
     const serviceExists = await serviceModel.findOne({name})
     if(serviceExists){
      return res.status(409).json({
        success: false,
        error: "Service already exists",
        message: "Service already exists",
      });
     }

     // //file validation
     const supportedTypes = ["jpeg", "jpg", "png"];
     const fileType = image.originalname.split(".").pop().toLowerCase(); // If the filename has multiple dots (my.profile.png), it will correctly extract the last extension.

     // if fileType is not supported
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
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

    // create
    const newService = await serviceModel.create({
      name,image:response.secure_url
    })
    
    res.status(201).json({
      success: true,
      message: "Service registered successfully",
      service:newService
    });


  } catch (error) {
    console.error(
      chalk.bgRed(
        "Error in addNewServiceController in admin.controller.js ====>> ",
        error.message
      )
    );
    if (error.code === 'ECONNRESET') {
      return res.status(500).json({ success: false, message: "Server connection lost. Please retry." });
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}



export const getAllServicesController = async(req,res) =>{
  try {
    const allservices = await serviceModel.find();
    res.status(200).json({
      success: true,
      data: allservices,
      message: "All Services Fetched Successfully",
    });
  } catch (error) {
    console.error(
      chalk.bgRed(
        "Error in  getAllServicesController in doctor.controller.js ====>> ",
        error.message
      )
    );
    if (error.code === 'ECONNRESET') {
      return res.status(500).json({ success: false, message: "Server connection lost. Please retry." });
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}