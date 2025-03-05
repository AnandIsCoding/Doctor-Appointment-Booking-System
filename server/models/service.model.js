// Import Mongoose to define the schema and interact with MongoDB
import mongoose from "mongoose";

// Define the schema for storing Services

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [3, "Service Name must be at least 3 characters long"],
        max: [50, "Service Name must less than 50 characters long"],
      },
      image: {
        type: String,
        default:
          "https://res.cloudinary.com/dm0rlehq8/image/upload/v1734288674/Tinder/mqlluvj6ufcqtbcns1ma.jpg",
      } 
});


// Create a Mongoose model for the "Service" collection
const serviceModel = mongoose.models.Service || mongoose.model("Service", serviceSchema);


// Export the service Model for use in other parts of the application
export default serviceModel;
