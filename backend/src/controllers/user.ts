import { Request, Response, NextFunction } from "express";
import path from "path";
import jwt, { JwtPayload } from "jsonwebtoken";
import fs from "fs";
import User from "../models/user";
import ErrorHandler from "../utils/ErrorHandler";
import sendEmail from "../utils/sendEmail";
import sendToken from "../utils/jwtToken";
import { validationResult } from "express-validator";

export type UserReqProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
};

export interface UserPayload extends JwtPayload, UserReqProps {}

const createActivationToken = (user: UserReqProps) => {
  return jwt.sign(user, process.env.JWT_SECRET_KEY as string, {
    expiresIn: process.env.JWT_EXPIRATION_DATE,
  });
};

export default {
  //@access Public
  //@route POST /user/signup
  async signup(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errMessage = errors.array()[0].msg;
      return next(new ErrorHandler(errMessage, 400));
    }

    const { firstName, lastName, email, password } = req.body;
    const userExits = await User.findOne({ email });

    if (userExits) {
      const filename = req.file?.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (error) => {
        if (error) {
          console.log(error);
          res
            .status(500)
            .json({ message: "Unable to delte avatar file at the moment" });
        }
      });

      return next(new ErrorHandler("This user is already in our record", 400));
    }

    const filename = req.file?.filename;

    if (!filename)
      return next(
        new ErrorHandler("Avatar upload failed. Please try again", 400)
      );

    const fileURL = path.join(filename);
    const body: UserReqProps = {
      firstName,
      lastName,
      email,
      password,
      avatar: fileURL,
    };

    const activateToken = createActivationToken(body);
    const activationLinkURL = `${process.env.FRONTEND_URL}/activate-account/${activateToken}`;

    try {
      await sendEmail({
        email: body.email,
        subject: "Activate your account",
        message: `Hello ${body.firstName}. Click on ${activationLinkURL} to activate your account`,
      });
      res.status(201).json({
        success: true,
        message: `Please check your email ${body.email} to activate your account`,
      });
    } catch (error: any) {
      console.log("Activation Error:", error);
      return next(new ErrorHandler(error.message, 500));
    }
  },

  //@access Public
  //@route POST /user/activate/
  async activateAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { activation_token } = req.body;
      const decoded = jwt.verify(
        activation_token,
        process.env.JWT_SECRET_KEY as string
      ) as UserPayload;

      if (!decoded)
        return next(
          new ErrorHandler("Your Token has either exprired or is invalid ", 400)
        );

      const { firstName, lastName, email, password, avatar } = decoded;

      let user = await User.findOne({ email });

      if (user)
        return next(
          new ErrorHandler("This user has already been activated", 400)
        );

      user = await User.create({
        firstName,
        lastName,
        email,
        password,
        avatar,
      });
      sendToken(user, 201, res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  },

  //@access Public
  //@route POST /user/signin
  async signin(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errMessage = errors.array()[0].msg;
      return next(new ErrorHandler(errMessage, 400));
    }

    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user)
        return next(
          new ErrorHandler("We cannot find this user in our record", 400)
        );

      const isMatch = await user.comparePassword(password);

      if (!isMatch)
        return next(
          new ErrorHandler("Either your email or password is incorrect", 400)
        );

      user.password = "";

      sendToken(user, 201, res);
    } catch (error: any) {
      console.log("Signin Error:", error);
      return next(new ErrorHandler(error.message, 500));
    }
  },
};
