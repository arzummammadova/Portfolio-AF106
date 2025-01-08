import mongoose from 'mongoose';

const studentsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    isStudent: { type: Boolean, required: true }
  },
  { collection: "students", timestamps: true }
);

const Student = mongoose.model("Students", studentsSchema);
export default Student;
