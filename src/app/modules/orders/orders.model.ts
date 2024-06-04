import { TOrder } from './orders.interface';
import { Schema, model } from "mongoose";


const orderSchema= new Schema <TOrder>({
    email:{
        type:String
    },
    productId:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    }
})

// create order

 export const OrderModel= model<TOrder>("Order", orderSchema)