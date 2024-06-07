import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import handleErrors from "./middlewares/handleErrors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/user";
import path from "path";

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

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

userRoutes(app);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

// Handle Errors
app.use(handleErrors);

export default app;
