// Import Mongoose to define the schema and interact with MongoDB
import mongoose from "mongoose";

// Define the schema for storing user feedback
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

// Create a Mongoose model for the "Feedback" collection
const Feedback = 
  mongoose.models.Feedback || // Use existing model if it exists
  mongoose.model("Feedback", feedbackSchema); // Otherwise, create a new model

// Export the Feedback model for use in other parts of the application
export default Feedback;