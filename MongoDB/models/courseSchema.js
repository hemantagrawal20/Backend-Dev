import mongoose from "mongoose";
export const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        unique: true
    },
    courseCode: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    }
});

const Course = mongoose.model("Course", courseSchema);
export default Course;