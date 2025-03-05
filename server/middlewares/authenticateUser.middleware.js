import jwt from 'jsonwebtoken'
import userModel from '../models/user.model.js'


export const authUser = async(req,res,next) =>{
    try {
        if (!req.cookies || !req.cookies.usertoken) {
            return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
        }
        // extract usertoken from request cookies
        const {usertoken} = req.cookies
        if (!usertoken) {
            return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' })
        }
        // verify user token using jwt
        const decodedData = jwt.verify(usertoken,  process.env.SECRET_KEY)
        const _id = decodedData._id
        req.body = { ...req.body, userId: _id };


        return next()


    } catch (error) {
        console.error('Error in authenticateUser middleware: ', error)

        if (error instanceof jwt.JsonWebTokenError) {
            // JWT-related errors (e.g., invalid token or expired)
            return res.status(401).json({ success: false, message: 'Unauthorized: Invalid or expired token' })
        }
        // Handle specific error if server connection is lost
        if (error.code === 'ECONNRESET') {
            return res.status(500).json({ success: false, message: 'Internal server error: Connection reset' })
        }

        // General error handling
        return res.status(500).json({ success: false, message: 'Internal server error' })
    }
    
}