// {
//     _id: "1",
//     name: "Dr. Rajesh Verma",
//     image: "https://img.freepik.com/free-photo/young-male-doctor-white-suit-with-blue-stethoscope-holding-notepad-smiling_140725-29525.jpg?t=st=1739526227~exp=1739529827~hmac=134f4ddacbb3a37e7b159f30546dc368f7535443e236eb8744f3c9ea88852cd3&w=996",
//     specialization: "Cardiologist",
//     experience: "12 years",
//     qualification: "MBBS, MD (Cardiology)",
//     contact: "+91 9876543210",
//     email: "dr.rajesh@example.com",
//     password: "password@example.com"
//     location: "New Delhi, India",
//     availability: true/false,
//     consultationFee: "₹800",
//     rating: 4.8,
//     about:" all details of doctor",
//      slotsBooked:{} by default
//   }

import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [3, "Doctor Name must be at least 3 characters long"],
    max: [50, "Doctor Name must less than 50 characters long"],
  },
  image: {
    type: String,
    required: true,
  },
  specialization: {
  type: String,
  required: [true, "Specialization is required"], // Custom required error message
  enum: {
    values: [
      "General Physician",
      "Cardiologist",
      "Neurologist",
      "Orthopedic",
      "Pediatrician",
      "Dermatologist",
      "Gynecologist",
      "ENT Specialist",
      "Ophthalmologist",
      "Psychiatrist",
      "Dentist",
      "Urologist",
      "Gastroenterologist",
      "Others",
    ],
    message: "Invalid specialization. Choose from the predefined list.",
  },
}
,
  experience: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
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
 password: {
    type: String,
    required: true
}
,
  location: {
    type: String,
    required: true,
  },
  consultationFee: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0,
  },
  slotsBooked:{
    type:Object,
    default:{}
  },
  about: {
    type: String,
    required: true,
  },
  availability: {
    type:Boolean,
    required: true,
    default: true,
  },
},{timestamps:true, minimize:false}); // It ensures that empty objects (e.g., {} in slotsBooked) are not removed before saving to the database.

const doctorModel = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);


export default doctorModel;


// notes 

// By default, Mongoose removes empty objects from documents before saving them. The { minimize: false } option prevents this behavior.

// When working with Mongoose in a Node.js application, especially in a server environment where the code may be hot-reloaded, re-declaring the same model using mongoose.model('Doctor', doctorSchema) without checking mongoose.models can lead to the following error:

// OverwriteModelError: Cannot overwrite `Doctor` model once compiled.
