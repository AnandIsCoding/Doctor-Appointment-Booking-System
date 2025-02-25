import express from 'express'
import { getAllDoctorsController, getDoctorByIdController } from '../controllers/doctor.controller.js'

const doctorRouter = express.Router()

doctorRouter.get('/alldoctors', getAllDoctorsController)
doctorRouter.get('/:id', getDoctorByIdController);


export default doctorRouter