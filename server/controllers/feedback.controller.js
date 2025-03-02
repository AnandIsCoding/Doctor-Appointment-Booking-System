import Feedback from "../models/feedback.model.js";
import userModel from "../models/user.model.js";

export const feedbackController = async(req,res) =>{
    try {
        const { userId , feedbackMessage } = req.body;

        const user = await userModel.findById(userId)
        if(!user) return res.status(404).json({success:false, message:'User not found'})
    
        const feedback = new Feedback({ userId,email:user.email,name:user.name, feedbackMessage });
        await feedback.save();
    
        res.status(201).json({ success: true, message: "Feedback submitted successfully!" });
      } catch (error) {
        console.log(chalk.bgReg('Error in feedbackController in feedback.controller.js ----->> ',error))
        res.status(500).json({ success: false, message: error.message });
      }
}