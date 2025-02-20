import chalk from 'chalk'


export const registerDoctorController = async (req,res) =>{
    // create doctor document in the database
    try {
        
    } catch (error) {
        // Error handling, error response
        if (error.name === 'ValidationError') {
            // Extract validation messages
            const messages = Object.values(error.errors).map(err => err.message);
            console.error(chalk.bgRed('Validation Error =>>>'), messages);
            return res.status(400).json({ success: false, message: 'Validation Error', errors: messages });
        }
        console.error(chalk.bgRed('Error in registerDoctorController in admin.controller.js ====>> ',error.message))
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}