import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  subject: {
    type: String,
  },
  role: {
    type: String,
    default: 'teacher', // Default role for teachers
  },
}, { timestamps: true });

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
