import app from ".";
import dotenv from "dotenv";
import connectMongoDB from "./db";

// Handle uncaughtException
process.on("uncaughtException", (error) => {
  console.log("Error:", error.message);
  console.log("Shutting down server on uncaught exception");
});

// Configuration
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "./src/config/.env",
  });
}

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

connectMongoDB();

// Handle unhandled promise rejection
process.on("unhandledRejection", (error) => {
  console.log("Error:", error);
  console.log("Shutting down server on unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
