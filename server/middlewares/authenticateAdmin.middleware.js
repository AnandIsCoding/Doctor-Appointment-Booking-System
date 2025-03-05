import jwt from "jsonwebtoken";

//      Extract the token from the request headers.
//      Verify the token using jwt.verify().
//      Attach the decoded admin data to req.admin for later use.
//      Reject the request if the token is missing or invalid.

export const authenticateAdmin = async (req, res, next) => {
  try {
    // Extract token from the Authorization header

    const { admintoken } = req.headers;

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(admintoken, process.env.SECRET_KEY);
    } catch (jwtError) {
      console.error("JWT Verification Error:", jwtError);
      return res.status(401).json({ success: false, message: "Invalid Token" });
    }
    // Ensure token belongs to the admin
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res
        .status(403)
        .json({ success: false, message: "Access Denied: Unauthorized Admin" });
    }

    // Attach admin info to the request
    req.admin = decoded;
    next();
  } catch (error) {
    // log error
    console.error("Unexpected Error in authenticateAdmin middleware", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
