import express from 'express'
import { getAllDoctorsController, getDoctorByIdController } from '../controllers/doctor.controller.js'

const doctorRouter = express.Router()

/**
 * @swagger
 * /api/v1/doctor/alldoctors:
 *   get:
 *     summary: Retrieve a list of all doctors
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: A list of doctors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier of the doctor
 *                   name:
 *                     type: string
 *                     description: Doctor's full name
 *                   image:
 *                     type: string
 *                     description: URL of the doctor's image
 *                   specialization:
 *                     type: string
 *                     description: Doctor's field of specialization
 *                   experience:
 *                     type: string
 *                     description: Doctor's years of experience
 *                   qualification:
 *                     type: string
 *                     description: Doctor's qualification
 *                   contact:
 *                     type: string
 *                     description: Doctor's contact number
 *                   email:
 *                     type: string
 *                     description: Doctor's email address
 *                   location:
 *                     type: string
 *                     description: Doctor's working location
 *                   consultationFee:
 *                     type: number
 *                     description: Fee charged for consultation
 *                   rating:
 *                     type: number
 *                     description: Doctor's rating
 *                   availability:
 *                     type: boolean
 *                     description: Doctor's availability status
 */

doctorRouter.get('/alldoctors', getAllDoctorsController)

/**
 * @swagger
 * /api/v1/doctor/{id}:
 *   get:
 *     summary: Retrieve a doctor by ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the doctor
 *     responses:
 *       200:
 *         description: A doctor object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the doctor
 *                 name:
 *                   type: string
 *                   description: Doctor's full name
 *                 image:
 *                   type: string
 *                   description: URL of the doctor's image
 *                 specialization:
 *                   type: string
 *                   description: Doctor's field of specialization
 *                 experience:
 *                   type: string
 *                   description: Doctor's years of experience
 *                 qualification:
 *                   type: string
 *                   description: Doctor's qualification
 *                 contact:
 *                   type: string
 *                   description: Doctor's contact number
 *                 email:
 *                   type: string
 *                   description: Doctor's email address
 *                 location:
 *                   type: string
 *                   description: Doctor's working location
 *                 consultationFee:
 *                   type: number
 *                   description: Fee charged for consultation
 *                 rating:
 *                   type: number
 *                   description: Doctor's rating
 *                 availability:
 *                   type: boolean
 *                   description: Doctor's availability status
 *       404:
 *         description: Doctor not found
 */
doctorRouter.get('/:id', getDoctorByIdController);


export default doctorRouter