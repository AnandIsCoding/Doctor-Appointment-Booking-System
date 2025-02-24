import express from 'express'
import { getAllDoctorsController } from '../controllers/doctor.controller.js'

const doctorRouter = express.Router()

doctorRouter.get('/alldoctors',getAllDoctorsController)

export default doctorRouter