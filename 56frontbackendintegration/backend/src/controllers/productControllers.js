import { syncIndexes } from "mongoose";
import Product from "../models/productsModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({ success: true, products });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const getProductbyId=async(req,res)=>{
    const {id}=req.params;
    try {
        const getProduct=await Product.findById(id);
        return res.status(200).json({ success: true, getProduct });
        
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }

}


export const addProduct=async(req,res)=>{
    try {
        const newProduct=new Product(req.body)
        await newProduct.save()
        return res.status(201).json({ success: true, message: "product added successfully" });
        
    } catch (error) {
        return res.status(500).send({message:"Internal server error",success:false})
    }

}


export const deleteProduct=async(req,res)=>{
    const {id}=req.params;
    try {
        const deletedProduct=await Product.findByIdAndDelete(id)
        if(!deletedProduct){
            return response.status(400).json({success:false,message:"Product not deleted.."})
          }
          else{
            return res.status(200).json({success:true,message:"deleted sucsesfully"})
          }
        
    } catch (error) {
        return res.status(500).send({message:"internal server error",success:false})
    }
}

export const updateProduct=async(req,res)=>{
    const {id}=req.params
   
    try {
  
    const updatedProduct=await Product.findByIdAndUpdate(id,req.body);
    if(!updatedProduct){
      return response.status(400).json({success:false,message:"Product not deleted.."})
    }
    else{
      return res.status(200).json({success:true,message:"deleted sucsesfully"})
    }
   
    } catch (error) {
       res.status(500).json({success:false,message:"internal invalidd error"})
    }
  }