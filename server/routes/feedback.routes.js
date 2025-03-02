import express from 'express'
import { authUser } from '../middlewares/authenticateUser.middleware.js'
import { feedbackController } from '../controllers/feedback.controller.js'
const feedbackRouter = express.Router()

feedbackRouter.post('/new', authUser, feedbackController)
export default feedbackRouter