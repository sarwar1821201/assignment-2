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



   const getSingleProduct=async(req:Request,res:Response)=>{

      try{
            const {productId}=req.params;
           const result=await ProductServices.getSingleProductFromDB(productId);
           res.status(200).json({
              success:true,
              message:" Single Products fetched Successfully",
              data:result
          })
      } catch(err){
        console.log(err)
      }
  
    }

   /// update a product

// const updateProduct=async(req:Request,res:Response)=>{

//       try{
//             const {productId}=req.params;
//           // const productUpdate=req.body
//            const result=await ProductServices.updateProductFromDB(productId);
//            res.status(200).json({
//               success:true,
//               message:"  Products updated Successfully",
//               data:result
//           })
//       } catch(err){
//         console.log(err)
//       }
  
//     }


  // delete product
  const deleteSingleProduct=async(req:Request,res:Response)=>{

   try{
         const {productId}=req.params;
        const result=await ProductServices.deleteSingleProductFromDB(productId);
        res.status(200).json({
           success:true,
           message:"  Products deleted Successfully",
           data:result
       })
   } catch(err){
     console.log(err)
   }

 }

/// 
  export const ProductControllers={
     createProduct,
     getAllProducts,
     getSingleProduct,
    // updateProduct,
    deleteSingleProduct
  }