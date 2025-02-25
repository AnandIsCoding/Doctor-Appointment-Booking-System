import express from 'express'
import upload from '../config/multer.config.js';
import {registerUserController, UserLoginController, UserLogoutController } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/signup',upload.single('image'),registerUserController)
userRouter.post('/login',upload.single('image'), UserLoginController)
userRouter.delete('/logout', UserLogoutController)

export default userRouter;