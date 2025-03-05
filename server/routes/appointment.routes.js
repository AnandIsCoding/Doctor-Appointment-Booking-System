// Import the Express framework to create a router
import express from 'express';

// Import controller functions to handle appointment-related operations
import { 
  allAppointmentsController, // Handles retrieving all appointments
  bookAppointmentController  // Handles booking a new appointment
} from '../controllers/appointment.controller.js';

// Import middleware to authenticate users before accessing protected routes
import { authUser } from '../middlewares/authenticateUser.middleware.js';

// Create an instance of the Express router
const appointmentRouter = express.Router();


/**
 * @swagger
 * /api/v1/appointment/book-appointment:
 *   post:
 *     summary: Book an appointment with a doctor
 *     tags: [Appointments]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               doctorId:
 *                 type: string
 *                 description: ID of the doctor
 *               dateSlot:
 *                 type: string
 *                 description: Date of the appointment
 *               timeSlot:
 *                 type: string
 *                 description: Time slot for the appointment
 *               amount:
 *                 type: number
 *                 description: Appointment fee amount
 *     responses:
 *       200:
 *         description: Appointment booked successfully
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized access
 */
appointmentRouter.post('/book-appointment',authUser, bookAppointmentController)

/**
 * @swagger
 * /api/v1/appointment/my-appointments:
 *   get:
 *     summary: Get all appointments of the logged-in user
 *     tags: [Appointments]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of user appointments
 *       401:
 *         description: Unauthorized access
 */
appointmentRouter.get('/my-appointments',authUser, allAppointmentsController)

export default appointmentRouter;