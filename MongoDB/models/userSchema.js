
import e from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [25, "Name cannot exceed 25 characters"]
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    password:{
        type: String,
        required: true,
        minLength: [8, "Password must be at least 8 characters long"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});

const User = mongoose.model("User", userSchema);

export default User;