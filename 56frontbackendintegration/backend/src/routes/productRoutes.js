import express from 'express'

import { addProduct, deleteProduct, getAllProducts, getProductbyId, updateProduct } from '../controllers/productControllers.js';

const productRouter=express.Router();

productRouter.get("/",getAllProducts)
productRouter.get("/:id",getProductbyId)
productRouter.post("/",addProduct)
productRouter.delete("/:id",deleteProduct)
productRouter.put("/:id",updateProduct)
export default productRouter
