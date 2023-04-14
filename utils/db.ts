import { connect, connection } from "mongoose";

export const connectDB = () => {
  if (!connection.readyState) return connect(process.env.MONGODB_URI as string);
};
