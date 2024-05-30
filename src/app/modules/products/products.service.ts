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
  

 export const ProductServices={
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB
 }