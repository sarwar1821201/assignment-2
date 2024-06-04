import { TOrder } from "./orders.interface";
import { OrderModel } from "./orders.model";


const createOrderIntoDb=async(order:TOrder)=>{

    const result =await OrderModel.create(order)
    return result;
 }


 export const OrderServices ={
    createOrderIntoDb
 }