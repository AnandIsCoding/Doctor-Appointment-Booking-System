import express from 'express'
import upload from '../config/multer.config.js';
import {getUserProfileController, registerUserController, updateUserProfileController, UserLoginController, UserLogoutController } from '../controllers/user.controller.js';
import { authUser } from '../middlewares/authenticateUser.middleware.js';

const userRouter = express.Router();

userRouter.post('/signup',upload.single('image'),registerUserController)
userRouter.post('/login',upload.single('image'), UserLoginController)
userRouter.get('/profile/view', authUser, getUserProfileController)
userRouter.patch('/profile/update',authUser, updateUserProfileController)
userRouter.delete('/logout', UserLogoutController)

export default userRouter;