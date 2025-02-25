// Import required modules
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv' // Dotenv to load environment variables
import chalk from 'chalk'   // Chalk for colored console logs


// Import database connection configuration file
import connectToDb from './config/database.config.js'
import connectToCloudinary from './config/cloudinary.config.js'
import adminRouter from './routes/admin.routes.js'
import doctorRouter from './routes/doctor.routes.js'
import userRouter from './routes/user.routes.js'

// Load environment variables from .env file
dotenv.config()

const app = express()

// Cloudinary configuration

connectToCloudinary()
.then(() => console.log(chalk.bgYellow('Connected to Cloudinary successfully ✅ ✅ ')))
.catch((error) => console.error(chalk.bgRed('�� Error in connecting to Cloudinary :'+ error.message)));


// SERVER PORT 
const PORT = process.env.SERVER_PORT || 7000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// CORS configuration
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

//all api endpoints
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/doctor', doctorRouter)
app.use('/api/v1/user',userRouter)



// database connection
connectToDb().then(()=>{
    console.log(chalk.bgMagenta('Connected to MongoDB Database successfully ✅ ✅ '))
    app.listen(PORT,()=>{
        console.log(chalk.bgGreenBright(`🚀 Server is listening at http://localhost:${PORT}`))
    })
}).catch((error)=>{
    console.error(chalk.bgRed('❌Error in connecting to MongoDB Database :'+ error.message))
    process.exit(1)  // exit the process with an error status code 1
})


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});