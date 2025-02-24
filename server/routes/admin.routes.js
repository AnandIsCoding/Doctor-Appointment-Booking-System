import express from 'express';
import upload from '../config/multer.config.js';

import {loginAdminController, registerDoctorController} from '../controllers/admin.controller.js'
import { authenticateAdmin } from '../middlewares/authenticateAdmin.middleware.js';


const adminRouter = express.Router()

// POST request to login Admin
adminRouter.post('/login',loginAdminController)

// POST request to register a new doctor
adminRouter.post('/register-doctor', authenticateAdmin, upload.single('image'), registerDoctorController)


export default adminRouter


