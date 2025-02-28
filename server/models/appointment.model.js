import mongoose from "mongoose";

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

const appointmentModel =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);
export default appointmentModel;
