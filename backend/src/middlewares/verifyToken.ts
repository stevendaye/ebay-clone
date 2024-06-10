import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler";
import catchAsyncErrors from "./catchAsyncErrors";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}

const verifyToken = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies["auth-token"];

    if (!token) return next(new ErrorHandler("Unauthorized Access", 401));

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
      req.user = { id: (decoded as JwtPayload).id };
      next();
    } catch (error: any) {
      console.log(error);
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export default verifyToken;
