// models/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  rank: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
