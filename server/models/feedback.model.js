import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
  feedbackMessage: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 500,
  },
  name: {
    type: String,
    required: true, // Store the user's name
  },
  email: {
    type: String,
    required: true, // Store the user's email
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;