import mongoose, { Document } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export interface UserModel extends Document {
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

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please your first name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Please, your last name is required"],
  },
  email: {
    type: String,
    required: [true, "Please your email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please, your password is required"],
    minLength: [4, "Please, password should be greater than 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
  },
  addresses: [
    {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      addressLine1: {
        type: String,
      },
      addressLine2: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      addressType: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    type: String,
    required: [true, "Please choose an avatar"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: process.env.JWT_EXPIRATION_DATE,
  });
};

UserSchema.methods.comparePassword = async function (loginPassword: string) {
  return await bcrypt.compare(loginPassword, this.password);
};

const User = mongoose.model<UserModel>("User", UserSchema);

export default User;
