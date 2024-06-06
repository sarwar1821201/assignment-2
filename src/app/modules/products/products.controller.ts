import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import mongoose from "mongoose";



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
    // console.log(err)
       res.status(500).json({
         success:false,
         message:"something went wrong",
         error:err
     })
   }
}

////

  const getAllProducts=async(req:Request,res:Response)=>{

    try{
          const searchTerm=req.query.searchTerm as string ;
          if(!searchTerm){
            const result=await ProductServices.getAllProductsFromDB(searchTerm );
         res.status(200).json({
            success:true,
            message:"Products fetched Successfully",
            data:result
        })
      }

      else{
        const result=await ProductServices.getAllProductsFromDB(searchTerm);
         res.status(200).json({
            success:true,
            message:`Products matching search term ${searchTerm} fetched successfully!`,
            data:result
        })
      }
         
    } catch(err){
      // console.log(err)
      res.status(500).json({
         success:false,
         message:"something went wrong",
         error:err
     })
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
        // console.log(err)
        res.status(500).json({
         success:false,
         message:"something went wrong",
         error:err
     })
      }
  
    }

   /// update a product

const updateProduct=async(req:Request,res:Response)=>{

       try{
        const id  = new mongoose.Types.ObjectId(req.params.productId.trim()) as unknown;
        const productData= req.body;

        const result= await ProductServices.updateProductFromDB(id,productData);
        res.status(200).json({
          success:true,
          message:"  Products updated Successfully",
          data:result
      })
       } catch(err){
        // console.log(err)
        res.status(500).json({
          success:false,
          message:"something went wrong",
          error:err
      })
       }

         
}


    


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
    //  console.log(err)
    res.status(500).json({
      success:false,
      message:"something went wrong",
      error:err
  })
   }

 }


 /// 

//  const searchProducts=async(req:Request,res:Response)=>{

//   try{
//         const searchTerm=req.query.searchTerm;
       
//        const result=await ProductServices.searchProduct(searchTerm as string );
//        res.status(200).json({
//           success:true,
//           message:"  Products find Successfully",
//           data:result
//       })
//   } catch(err){
//     console.log(err)
//   }

// }





/// 
  export const ProductControllers={
     createProduct,
     getAllProducts,
     getSingleProduct,
     updateProduct,
    deleteSingleProduct,
  //searchProducts
  }