import { Request, Response } from "express";
import { ProductServices } from "./products.service";


const createProduct=async (req:Request,res:Response) => {

   try{
    const product=req.body;
    // will call to the service function
     const result= await ProductServices.createProductIntoDB(product)
 
    /// send response
     res.status(200).json({
         success:true,
         message:"Products Created Successfully",
         data:result
     })
   } catch(err){
    console.log(err)
   }
}

  export const ProductControllers={
     createProduct
  }