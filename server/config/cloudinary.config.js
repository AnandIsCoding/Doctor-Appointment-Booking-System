import { v2 as cloudinary } from "cloudinary";
import chalk from "chalk";

const connectToCloudinary = async () => {
  try {
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  } catch (error) {
    console.error(chalk.redBright(error.message));
  }
};

export default connectToCloudinary
