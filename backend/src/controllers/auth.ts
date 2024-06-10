import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import ErrorHandler from "../utils/ErrorHandler";

export default {
  //@access Public
  //@routes GET /user/verify/token
  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await User.findOne({ _id: req.user.id });

      if (!user)
        return next(
          new ErrorHandler("We can't find this user in our record", 400)
        );

      res.status(200).json({ success: true, user });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  },
};
