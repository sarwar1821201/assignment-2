import { Request, Response } from "express";
import { ProductServices } from "./products.service";


const createProduct=async (req:Request,res:Response) => {

   try{
    const {product:productData}=req.body;
    // will call to the service function
     const result= await ProductServices.createProductIntoDB(productData)
 
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

////

  const getAllProducts=async(req:Request,res:Response)=>{

    try{
         const result=await ProductServices.getAllProductsFromDB();
         res.status(200).json({
            success:true,
            message:"Products fetched Successfully",
            data:result
        })
    } catch(err){
      console.log(err)
    }

  }



/// 
  export const ProductControllers={
     createProduct,
     getAllProducts
  }