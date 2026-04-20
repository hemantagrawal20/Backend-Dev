import mongoose from "mongoose";
export const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    StudentId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    Rollno: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;