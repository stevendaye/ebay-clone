import express, { Express } from "express";
import config from "../config/index.json";
import auth from "../controllers/auth";
import verifyToken from "../middlewares/verifyToken";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

const router = express.Router();

const authRoutes = (app: Express) => {
  router.get(
    config.routes.user.validateToken,
    verifyToken,
    catchAsyncErrors(auth.authenticate)
  );

  app.use(config.routes.api, router);
};

export default authRoutes;
