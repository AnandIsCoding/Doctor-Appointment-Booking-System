// Import required modules
import swaggerJSDoc from "swagger-jsdoc"; // Swagger for API documentation
import swaggerUI from "swagger-ui-express"; // Swagger UI for API visualization
import path from "path"; // Path module for handling file paths
import { fileURLToPath } from "url"; // ES module compatibility for __dirname
import chalk from 'chalk'

// Define __dirname manually for ES module support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Swagger configuration options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "🏥 Doctor Appointment Booking System API",
            version: "1.0.0",
            description: "📑 API documentation for Doctor Appointment Booking System, demo doctor id: 67ba0d30c409dabf75bcbaf2",
        },
        servers: [
            { url: "https://dochealth.onrender.com" } // Change this to your deployed API URL
        ],
    },
    apis: [path.join(__dirname, "../routes/*.routes.js")], // Adjust path to route files
};

// Generate Swagger documentation specification
const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    console.log(chalk.bgCyanBright("Swagger documentation available at https://dochealth.onrender.com/api-docs"));
};

// Export the function to integrate with the main server file
export default swaggerDocs;
