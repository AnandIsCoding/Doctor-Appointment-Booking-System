// Import the Express framework to create a router
import express from 'express';

// Import Multer configuration for handling file uploads
import upload from '../config/multer.config.js';

// Import controller functions to handle user-related operations
import { 
  getUserProfileController,   // Handles retrieving user profile details
  registerUserController,     // Handles user registration
  updateUserProfileController, // Handles updating user profile
  UserLoginController,        // Handles user login
  UserLogoutController        // Handles user logout
} from '../controllers/user.controller.js';

// Import middleware to authenticate users before accessing protected routes
import { authUser } from '../middlewares/authenticateUser.middleware.js';

// Import controller function to retrieve all services (used by users)
import { getAllServicesController } from '../controllers/admin.controller.js';

// Create an instance of the Express router
const userRouter = express.Router();


/**
 * @swagger
 * /api/v1/user/signup:
 *   post:
 *     summary: Register a new user
 *     description: Allows a new user to sign up with an optional profile image.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "User@123"
 *               contact:
 *                 type: string
 *                 example: "+911234567890"
 *               gender:
 *                 type: string
 *                 enum: ["male", "female", "others"]
 *               dob:
 *                 type: string
 *                 example: "1990-01-01"
 *               bloodGroup:
 *                 type: string
 *                 example: "O+"
 *               address:
 *                 type: string
 *                 example: "123 Street, City, Country"
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Internal server error
 */

userRouter.post('/signup',upload.single('image'),registerUserController)

/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: User Login
 *     description: Authenticates a user and returns a JWT token.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "User@123"
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1..."
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
userRouter.post('/login',upload.single('image'), UserLoginController)

/**
 * @swagger
 * /api/v1/user/profile/view:
 *   get:
 *     summary: Get user profile
 *     description: Returns the profile details of the logged-in user.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile
 *       401:
 *         description: Unauthorized (JWT token required)
 *       500:
 *         description: Internal server error
 */
userRouter.get('/profile/view', authUser, getUserProfileController)

/**
 * @swagger
 * /api/v1/user/profile/update:
 *   patch:
 *     summary: Update user profile
 *     description: Allows the authenticated user to update their profile.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               contact:
 *                 type: string
 *                 example: "+911234567890"
 *               gender:
 *                 type: string
 *                 enum: ["male", "female", "others"]
 *               dob:
 *                 type: string
 *                 example: "1990-01-01"
 *               bloodGroup:
 *                 type: string
 *                 example: "O+"
 *               address:
 *                 type: string
 *                 example: "123 Street, City, Country"
 *     responses:
 *       200:
 *         description: Successfully updated profile
 *       401:
 *         description: Unauthorized (JWT token required)
 *       500:
 *         description: Internal server error
 */
userRouter.patch('/profile/update',authUser, updateUserProfileController)

/**
 * @swagger
 * /api/v1/user/logout:
 *   delete:
 *     summary: User logout
 *     description: Logs out the user by clearing the session or token.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       500:
 *         description: Internal server error
 */
userRouter.delete('/logout', UserLogoutController)


/**
 * @swagger
 * /api/v1/user/allservices:
 *   get:
 *     summary: Get all available hospital services
 *     description: Fetches a list of all hospital services, including their names and images.
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: A list of services fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "67c5f3feb3b15114a0dbec6f"
 *                       name:
 *                         type: string
 *                         example: "Outpatient Services (OPD)"
 *                       image:
 *                         type: string
 *                         example: "https://res.cloudinary.com/dm0rlehq8/image/upload/sample.jpg"
 *                 message:
 *                   type: string
 *                   example: "All Services Fetched Successfully"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
userRouter.get('/allservices',getAllServicesController)

export default userRouter;