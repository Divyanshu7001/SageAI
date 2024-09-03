import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: [2, "First Name must be of two Characters"],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [2, "Last Name must be of two Characters"],
    },
    username: {
      type: String,
      required: true,
      minlength: [2, "Username must be of two Characters"],
    },
    email: {
      type: String,
      required: true,
      validator: [validator.isEmail, "Please provide an valid Email Address"],
    },
    role: {
      type: String,
      required: true,
      enum: ["User", "Admin"],
    },
    password: {
      type: String,
      required: true,
      validator: [
        validator.isStrongPassword,
        "Please provide an Strong Password",
      ],
    },
    avatar: {
      public_id: String,
      url: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) {
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    } catch (error) {
      return next(error);
    }
  }
  next();
});
export const User = mongoose.model("User", userSchema);
