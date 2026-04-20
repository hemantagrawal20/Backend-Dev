import mongoose from "mongoose";
export const enrollmentSchema = new mongoose.Schema({
    enrollment_id: {
        type: String,
        required: true,
        unique: true
    },
    student_id: {
        type: String,
        required: true
    },
    course_id: {
        type: String,
        required: true
    },
    enrollment_date: {
        type: Date, 
        default: Date.no0
    }
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
export default Enrollment;m