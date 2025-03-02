import express from 'express';
import { allAppointmentsController, bookAppointmentController } from '../controllers/appointment.controller.js';
import {authUser} from '../middlewares/authenticateUser.middleware.js'

const appointmentRouter = express.Router()

appointmentRouter.post('/book-appointment',authUser, bookAppointmentController)
appointmentRouter.get('/my-appointments',authUser, allAppointmentsController)

export default appointmentRouter;