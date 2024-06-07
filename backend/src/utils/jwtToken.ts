import { Response } from "express";
import { UserModel } from "../models/user";

const sendToken = (user: UserModel, statusCode: number, res: Response) => {
  const token = user.getJwtToken();
  const sanitizedUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };

  res
    .status(statusCode)
    .cookie("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    })
    .json({ success: true, sanitizedUser, token });
};

export default sendToken;
