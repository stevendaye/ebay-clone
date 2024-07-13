import { Response } from "express";
import { UserType } from "../commons/types";

const sendToken = (user: UserType, statusCode: number, res: Response) => {
  const token = user.getJwtToken();

  res
    .status(statusCode)
    .cookie("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    })
    .json({ success: true, user });
};

export default sendToken;
