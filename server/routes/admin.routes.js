import express from 'express';
import upload from '../config/multer.config.js';

import {registerDoctorController} from '../controllers/admin.controller.js'


const adminRouter = express.Router()

adminRouter.post('/register-doctor', upload.single('image'), registerDoctorController)


export default adminRouter


