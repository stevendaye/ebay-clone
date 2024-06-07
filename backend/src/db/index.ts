import mongoose from "mongoose";

const connectMongoDB = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then((data) => {
      console.log("Mongod Connected to Server:", data.connection.host);
    });
};

export default connectMongoDB;
