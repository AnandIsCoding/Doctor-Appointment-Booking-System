import Feedback from "../models/feedback.model.js";
import userModel from "../models/user.model.js";


// Controller to handle feedback submission from users.
export const feedbackController = async(req,res) =>{
    try {
      // fetch userId and feedbackMmessage from request body
        const { userId , feedbackMessage } = req.body;

        // Check if user register or not
        const user = await userModel.findById(userId)
        if(!user) return res.status(404).json({success:false, message:'User not found'})
    
          // Create a new Feedback instance with the provided userId, email, name, and feedbackMessage
        // Save the feedback to the database using the Feedback model's save method  (save method returns a Promise)
        const feedback = new Feedback({ userId,email:user.email,name:user.name, feedbackMessage });
        await feedback.save();
    
        res.status(201).json({ success: true, message: "Feedback submitted successfully!" });
      } catch (error) {
        // Log the error message with a red background using Chalk
        console.log(chalk.bgReg('Error in feedbackController in feedback.controller.js ----->> ',error))
        // Handle specific error if server connection is lost
        if (error.code === 'ECONNRESET') {
          return res.status(500).json({ success: false, message: "Server connection lost. Please retry." });
        }
        // send a genric internal server error
        res.status(500).json({ success: false, message: error.message });
      }
}