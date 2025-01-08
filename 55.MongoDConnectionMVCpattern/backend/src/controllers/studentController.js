import mongoose from 'mongoose';
import Student from '../models/studentModel.js';


export const getStudents=async(req,res)=>{

  try {
   const students=await Student.find()
  return res.status(200).json({success:true,students})
   
  } catch (error) {
    return res.status(500).json({success:false,message:"Internal server error"})
  }

}
export const getStudentbyId=async(req,res)=>{
    const { id }=req.params
    try {
      const findStudent=await Student.findById(id);
      return res.status(200).json({success:true,students:findStudent})
      
    } catch (error) {
      return res.status(500).json({success:false,message:"Internal server error"})     
    }
}

export const addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    return res.status(201).json({ success: true, message: "Student added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};


export const deleteStudent=async(req,res)=>{
 const {id}=req.params
 try {
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false,message:"invalid product id"})
  }
 const deleteStudent=await Student.findByIdAndDelete(id)
  if(!deleteStudent){
    return response.status(400).json({success:false,message:"Product not deleted.."})
  }
  else{
    return res.status(200).json({success:true,message:"deleted sucsesfully"})
  }
 } catch (error) {
  return res.status(500).json({success:false,message:"invalid server errror"})
 }
}

export const updateStudent=async(req,res)=>{
  const {id}=req.params
 
  try {
 if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false,message:"invalid product id"})
  }
  const updatedStudent=await Student.findByIdAndUpdate(id,req.body);
  if(!updatedStudent){
    return response.status(400).json({success:false,message:"Product not deleted.."})
  }
  else{
    return res.status(200).json({success:true,message:"deleted sucsesfully"})
  }
 
  } catch (error) {
     res.status(500).json({success:false,message:"internal invalid error"})
  }
}
export const patchStudent=async(req,res)=>{
  const {id}=req.params
 
  try {
 if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false,message:"invalid product id"})
  }
  const updatedStudent=await Student.findByIdAndUpdate(id,req.body);
  if(!updatedStudent){
    return response.status(400).json({success:false,message:"Product not deleted.."})
  }
  else{
    return res.status(200).json({success:true,message:"deleted sucsesfully"})
  }
 
  } catch (error) {
     res.status(500).json({success:false,message:"internal invalid error"})
  }
}