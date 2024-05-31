import { TProduct } from "./products.interface";
import { ProductModel } from "./products.model";


const createProductIntoDB=async(product:TProduct)=>{

   const result =await ProductModel.create(product)
   return result;
}

 const getAllProductsFromDB=async()=>{
   const result =await ProductModel.find()
   return result;
 }


 const getSingleProductFromDB=async(_id:string)=>{
    const result=await ProductModel.findById({_id})
    return result
 }

 const updateProductFromDB=async(_id:string, product:TProduct )=>{
const result=await ProductModel.findByIdAndUpdate({_id},{
    $set:{...product}},
    {new:true}
   )
   return result;
 }

  const deleteSingleProductFromDB=async(_id:string)=>{
   const result=await ProductModel.deleteOne({_id})
   return result
}
  

 export const ProductServices={
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteSingleProductFromDB
 }