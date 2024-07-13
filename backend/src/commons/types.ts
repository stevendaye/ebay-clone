import { Document } from "mongoose";

export interface UserType extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  addresses: {
    country: string;
    city: string;
    addressLine1: string;
    addressLine2: string;
    zipCode: string;
    addressType: string;
  };
  role: string;
  avatar: string;
  createdAt: Date;
  resetPasswordToken: string;
  resetPasswordTime: Date;
  getJwtToken(): string;
  comparePassword(password: string): Promise<boolean>;
}
