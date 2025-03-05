import mongoose from "mongoose"; // Import Mongoose to define the schema and interact with MongoDB

// Define the schema for storing appointment details
const appointmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  dateSlot: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  userData: {
    type: Object,
    required: true,
  },
  doctorData: {
    type: Object,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
  paymentDone: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

// Create a Mongoose model for the "Appointment" collection
const appointmentModel =
  mongoose.models.Appointment || 
  mongoose.model("Appointment", appointmentSchema); // Otherwise, create a new model

  //Export the appointment model for use in other parts of the application
export default appointmentModel;
