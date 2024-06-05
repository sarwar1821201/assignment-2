
import { TProduct } from "./products.interface";
import { ProductModel } from "./products.model";


const createProductIntoDB=async(product:TProduct)=>{

   const result =await ProductModel.create(product)
   return result;
}

 const getAllProductsFromDB=async(searchTerm:string)=>{
   if(!searchTerm){
      const result =await ProductModel.find()
      return result;
   }

   else{
      const result =await ProductModel.find({
         name:{$regex:searchTerm, $options:'i' }
      })
      return result;
   }
  
 }


 const getSingleProductFromDB=async(_id:string)=>{
    const result=await ProductModel.findById({_id})
    return result
 }

 const updateProductFromDB=async(id:unknown, product: Partial<TProduct> )=>{
      const result= await ProductModel.findByIdAndUpdate(id,product,
         {new:true, runValidators:true }  )
         return result;
  };

  const deleteSingleProductFromDB=async(_id:string)=>{
   const result=await ProductModel.deleteOne({_id})
   return result
}


// const searchProduct=async(searchTerm:string)=>{

   
//    const searchProduct={
//       $or:[
//          {name:{$regex:searchTerm, $options:'i' }},
//          {category:{$regex:searchTerm, $options:'i' }}
//       ]
//    }
//    const result=await ProductModel.find(searchProduct);
//    return result;
// }
  

 export const ProductServices={
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteSingleProductFromDB,
   //  searchProduct
 }