import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface UserAttribute {
  _id: string;
  fullName: string;
  mobileNumber: string;
  email: string;
  dob: string;
}

let userSchema = new Schema<UserAttribute>({
  _id: { type: String, required: true, default: uuidv4 },
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
