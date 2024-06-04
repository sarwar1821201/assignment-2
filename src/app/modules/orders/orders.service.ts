import { TOrder } from "./orders.interface";
import { OrderModel } from "./orders.model";


const createOrderIntoDb=async(order:TOrder)=>{

    const result =await OrderModel.create(order)
    return result;
 }


  // get all orders
  const getAllOrdersFromDB=async(email:string)=>{
      
    if(!email){
        const result =await OrderModel.find()
        return result;
    }

    else{
        const result =await OrderModel.find({
            email:{$regex:email, $options:'i' }
         })
         return result;
    }
       
    }

 export const OrderServices ={
    createOrderIntoDb,
    getAllOrdersFromDB
 }