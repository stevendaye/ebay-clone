import express from "express";
import dotenv from "dotenv";
import handleErrors from "./middlewares/handleErrors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { authRoutes, userRoutes } from "./routes";

const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "./src/config/.env",
  });
}

app.use(cookieParser());
app.use(express.json());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

userRoutes(app);
authRoutes(app);

// Handle Errors
app.use(handleErrors);

export default app;
