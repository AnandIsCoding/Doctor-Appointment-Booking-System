// Import the Express framework to create a router
import express from 'express';

// Import middleware to authenticate users before they can submit feedback
import { authUser } from '../middlewares/authenticateUser.middleware.js';

// Import controller function to handle feedback-related operations
import { feedbackController } from '../controllers/feedback.controller.js';

// Create an instance of the Express router
const feedbackRouter = express.Router();



/**
 * @swagger
 * /api/v1/feedback/new:
 *   post:
 *     summary: Submit new feedback
 *     description: Allows an authenticated user to submit feedback.
 *     tags:
 *       - Feedback
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - feedbackMessage
 *               - name
 *               - email
 *             properties:
 *               feedbackMessage:
 *                 type: string
 *                 minLength: 5
 *                 maxLength: 500
 *                 description: The feedback message.
 *               name:
 *                 type: string
 *                 description: Name of the user giving feedback.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the user giving feedback.
 *     responses:
 *       201:
 *         description: Feedback submitted successfully.
 *       400:
 *         description: Invalid request data.
 *       401:
 *         description: Unauthorized, token missing or invalid.
 */
feedbackRouter.post('/new', authUser, feedbackController)
export default feedbackRouter