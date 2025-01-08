import express from 'express';
import { addStudent,deleteStudent,getStudentbyId,getStudents, patchStudent, updateStudent } from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.post("/", addStudent);
studentRouter.get("/",getStudents);
studentRouter.get("/:id",getStudentbyId);
studentRouter.delete("/:id",deleteStudent)
studentRouter.put("/:id",updateStudent)
studentRouter.patch("/:id",patchStudent)
export default studentRouter;
