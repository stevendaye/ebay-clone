import express, { Express } from "express";
import { check } from "express-validator";
import config from "../config/index.json";
import user from "../controllers/user";
import { upload } from "../middlewares/multer";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

const router = express.Router();

const userRoutes = (app: Express) => {
  //@desc sign up new user
  router.post(
    config.routes.user.signup,
    upload.single("avatar"),
    [
      check("firstName", "Your first name is required").not().isEmpty(),
      check("lastName", "Your last name is required").not().isEmpty(),
      check("email", "Provide a valid email address").isEmail(),
      check("password", "Provide a password of 6 charcter minimun").isLength({
        min: 6,
      }),
    ],
    user.signup
  );

  //@desc activate new account
  router.post(
    config.routes.user.activate,
    catchAsyncErrors(user.activateAccount)
  );

  //@desc sign in new user
  router.post(
    config.routes.user.signin,
    [
      check("email", "Provide a valid email address").isEmail(),
      check("password", "Provide your current password").isLength({
        min: 6,
      }),
    ],
    user.signin
  );

  app.use(config.routes.api, router);
};

export default userRoutes;
