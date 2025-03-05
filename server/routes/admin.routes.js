// Import the Express framework to create a router
import express from 'express';

// Import the Multer configuration for handling file uploads
import upload from '../config/multer.config.js';

// Import controller functions to handle admin-related operations
import { 
  addNewServiceController,   // Handles adding a new service
  getAllServicesController,  // Handles retrieving all services
  loginAdminController,      // Handles admin login
  registerDoctorController   // Handles doctor registration
} from '../controllers/admin.controller.js';

// Import middleware to authenticate admin users before accessing protected routes
import { authenticateAdmin } from '../middlewares/authenticateAdmin.middleware.js';



const adminRouter = express.Router()

// POST request to login Admin

/**
 * @swagger
 * /api/v1/admin/login:
 *   post:
 *     summary: Admin Login
 *     description: Admin logs in using email and password stored in the environment variables.
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Admin email (stored in environment variables).
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Admin password (stored in environment variables).
 *     responses:
 *       200:
 *         description: Admin logged in successfully.
 *       400:
 *         description: Invalid credentials.
 *       401:
 *         description: Unauthorized access.
 */
adminRouter.post('/login',loginAdminController)

// POST request to register a new doctor

/**
 * @swagger
 * /api/v1/admin/register-doctor:
 *   post:
 *     summary: Register a new doctor
 *     description: Allows an authenticated admin to register a new doctor with an image upload.
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - image
 *               - specialization
 *               - experience
 *               - qualification
 *               - contact
 *               - email
 *               - password
 *               - location
 *               - consultationFee
 *               - about
 *             properties:
 *               name:
 *                 type: string
 *                 description: Doctor's full name.
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Doctor's profile image.
 *               specialization:
 *                 type: string
 *                 description: Doctor's specialization.
 *               experience:
 *                 type: string
 *                 description: Years of experience.
 *               qualification:
 *                 type: string
 *                 description: Doctor's qualification.
 *               contact:
 *                 type: string
 *                 description: Doctor's contact number.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Doctor's email.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Doctor's account password.
 *               location:
 *                 type: string
 *                 description: Doctor's location.
 *               consultationFee:
 *                 type: number
 *                 description: Doctor's consultation fee.
 *               about:
 *                 type: string
 *                 description: Description about the doctor.
 *     responses:
 *       201:
 *         description: Doctor registered successfully.
 *       400:
 *         description: Invalid request data.
 *       401:
 *         description: Unauthorized, admin authentication required.
 */
adminRouter.post('/register-doctor', authenticateAdmin, upload.single('image'), registerDoctorController)


// POST request to register a new service
/**
 * @swagger
 * /api/v1/admin/register-new-service:
 *   post:
 *     summary: Register a new service
 *     description: Allows an authenticated admin to add a new service with an image upload.
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file for the service.
 *     responses:
 *       201:
 *         description: Service registered successfully.
 *       400:
 *         description: Invalid request data.
 *       401:
 *         description: Unauthorized access.
 *       500:
 *         description: Internal server error.
 */
adminRouter.post('/register-new-service', authenticateAdmin,upload.single('image'),addNewServiceController)

// GET request to fetch all services
/**
 * @swagger
 * /api/v1/admin/allservices:
 *   get:
 *     summary: Get all services
 *     description: Fetches a list of all registered services. Requires admin authentication.
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved services.
 *       401:
 *         description: Unauthorized access.
 *       500:
 *         description: Internal server error.
 */
adminRouter.get('/allservices',authenticateAdmin, getAllServicesController)


export default adminRouter


