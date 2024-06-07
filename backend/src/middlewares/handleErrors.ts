import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";

interface ExtendedError extends Error {
  statusCode: number;
  code?: number;
  keyValue?: Record<string, any>;
  path?: string;
}

export default (
  err: ExtendedError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong mongod id error
  if (err.name === "CastError") {
    const message = `Resources not founf with the id ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Duplicate key error
  if (err.code === 11000 && err.keyValue) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = `Invalid URL. Please try again later`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Exprired
  if (err.name === "TokenExpriredError") {
    const message = `URL has expired. Please try again later`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
