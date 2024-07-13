import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserType } from "../commons/types";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
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
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: process.env.JWT_EXPIRATION_DATE,
  });
};

UserSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.set("toJSON", {
  transform: (doc, data, options) => {
    delete data.password;
    return data;
  },
});

const User = mongoose.model<UserType>("User", UserSchema);

export default User;
