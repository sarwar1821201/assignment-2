
import { TInventory, TProduct, TVariants } from './products.interface';
import { Schema, model, connect } from 'mongoose';

  const variantsSchema=new Schema <TVariants>({
     type:{
        type: String,
     },
     value:{
        type:String
     }
  })

  const inventorySchema= new Schema <TInventory>({
     quantity:{
        type:Number
     },
     inStock:{
        type:Boolean
     }
  })

 
const productSchema= new Schema <TProduct>({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    category:{type:String},
    tags:{type:[String]},
    variants:{type:[variantsSchema]},
    inventory:inventorySchema
})


/// create model
 export  const ProductModel=model<TProduct>("Product",productSchema)



 