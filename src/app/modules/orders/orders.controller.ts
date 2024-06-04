import { Request, Response } from "express";
import { OrderServices } from "./orders.service";

const createOrder=async (req:Request,res:Response) => {

    try{
     const {order:orderData}=req.body;
     // will call to the service function
      const result= await OrderServices.createOrderIntoDb(orderData)
  
     /// send response
      res.status(200).json({
          success:true,
          message:"Orders Created Successfully",
          data:result
      })
    } catch(err){
     console.log(err)
    }
 }


 export const OrderControllers={
    createOrder
 }