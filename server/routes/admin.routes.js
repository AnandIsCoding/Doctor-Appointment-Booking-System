import express from 'express';
import upload from '../config/multer.config.js';

import {loginAdminController, registerDoctorController} from '../controllers/admin.controller.js'
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


export default adminRouter


