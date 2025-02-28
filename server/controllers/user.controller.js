import chalk from "chalk";
import userModel from "../models/user.model.js";
import {
  isFileTypeSupported,
  uploadFileToCloudinary,
} from "../utils/helpers.utils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUserController = async (req, res) => {
  try {
    const { name, email, password, age, gender } = req.body;
    const image = req.file;

    if (!name || !email || !password || !age || !gender) {
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

    //check if user already registered with same email
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(409).json({
        success: false,
        error: "User already exists",
        message: "User already exists",
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
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    //create new user in user collection, db
    const user = await userModel.create({
      name,
      email,
      password: encryptedUserPassword,
      age,
      gender,
      image: response.secure_url,
    });

    var usertoken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("usertoken", usertoken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      secure: process.env.NODE_ENV === "production",
      secure: true,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: user,
      usertoken: usertoken,
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
    console.log(chalk.bgRed("Error in registerUserController.js ===> ", error));
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};


// user Login Controller

export const UserLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required field" });
    }
    const user = await userModel.findOne({ email });
    // bcrypt.compare(plaintext_password, hashed_password);

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword)
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });

    //create a jwt token nd add it to cookie, and send to user
    var usertoken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res
      .cookie("usertoken", usertoken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        message: "User Login successfull",
        success: true,
        user,
        usertoken: usertoken,
      });
  } catch (error) {
    console.log(
      chalk.bgRed(
        "Error in LoginUserController in user.controller.js ===> ",
        error
      )
    );
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};



// get user profile controller 

export const getUserProfileController = async (req, res) => {
  try {
    const { userId } = req.body;
    //find the user by id
    const user = await userModel.findById(userId).select("-password"); //-password so that it will not contain password , security purpose
    if (!user)
      return res
        .status(409)
        .json({
          success: false,
          message: "User not found",
          error: "User not found",
        });
    return res
      .status(200)
      .json({
        success: true,
        message: "User profile fetched successfully",
        user: user,
      });
  } catch (error) {
    console.log(
      chalk.bgRed(
        "Error in userGetProfileController in user.controller.js ===> ",
        error
      )
    );
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// react part data that I will update using update profile
// const [userDetails, setUserdetails] = useState({
//   name: "Anand Jha",
//   age: 21,
//   email: "anand@example.com",
//   contact: "9876543210",
//   address: "123 Main St, City, State, Zip",
//   gender: "male",
//   dob: "18-01-2004",
//   bloodGroup: "A+",
// });




// profile update controller
export const updateUserProfileController = async (req, res) => {
  try {
    // extract all required fields from body to update
    const {
      userId,
      name,
      age,
      contact,
      address,
      gender,
      dob,
      bloodGroup,
    } = req.body;

    if (
      !userId ||
      !name ||
      !age ||
      !contact ||
      !address ||
      !gender ||
      !dob ||
      !bloodGroup
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required field" });
    }
    // find the user by id and update the fields
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        name,
        age,
        contact,
        address,
        gender,
        dob,
        bloodGroup,
      },
      { new: true } // return updated document
    );
    if (!user)
      return res
        .status(409)
        .json({ success: false, message: "User not found" });
    return res
      .status(200)
      .json({
        success: true,
        message: "User profile updated successfully",
        user,
      });
  } catch (error) {
    console.log(
      chalk.bgRed(
        "Error in updateUserProfileController in user.controller.js ===> ",
        error
      )
    );
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};



// user logout controller

export const UserLogoutController = async (req, res) => {
  try {
    res.cookie("usertoken", null, { expires: new Date(Date.now()) });
    return res
      .status(200)
      .json({ success: true, message: "Logout successfully" });
  } catch (error) {
    console.log(
      chalk.bgRed(
        "Error in LogoutUserController in user.controller.js ===> ",
        error
      )
    );
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
