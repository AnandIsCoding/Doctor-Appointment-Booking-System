// {
//     name: "Anand Jha",
//     age: 21,
//     email: "anand@example.com",
//      password:'hhgkorjf798'
//     contact: "9876543210",
//     address: "123 Main St, City, State, Zip",
//     gender: "male",
//     dob: "18/01/2004",
//     bloodGroup: "A+",
//   }

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [3, "Doctor Name must be at least 3 characters long"],
    max: [50, "Doctor Name must less than 50 characters long"],
  },
  image: {
    type: String,
    default:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
  },
  contact: {
    type: String,
    default: "1234567890",
    validate: {
      validator: function (v) {
        return /^(\+?\d{10,15})$/.test(v);
      },
      message: "Invalid phone number format",
    }, 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Invalid email format",
    },
  },
  location: {
    type: String,
    required: true,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "others"], // Allowed values
      message: "Please select male, female, or others",
    },
    default: "Not Selected", // Moved outside enum
  },
  dob: {
    type: String,
    default: "Not Selected",
  },
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
