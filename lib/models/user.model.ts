import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  userLibrary: [
    {
      imageId: { type: String },
      imageUrl: { type: String },
    },
  ],
  downloadHistory: [
    {
      imageId: { type: String },
      imageUrl: { type: String },
    },
  ],
  email: { type: String, unique: true },
});

userSchema.index({ userId: 1 }, { unique: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
