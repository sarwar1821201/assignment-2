import { Request, Response } from "express";
import { OrderServices } from "./orders.service";

const createOrder=async (req:Request,res:Response) => {

    try{
     const order=req.body;
     // will call to the service function
      const result= await OrderServices.createOrderIntoDb(order)
  
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


  /// get all order

  const getAllOrders=async(req:Request,res:Response)=>{

    try{
        const email=req.query.email as string ;
        if(!email){
          const result=await OrderServices.getAllOrdersFromDB(email );
       res.status(200).json({
          success:true,
          message:"Products fetched Successfully",
          data:result
      })
    }

    else{
      const result=await OrderServices.getAllOrdersFromDB(email);
       res.status(200).json({
          success:true,
          message:`Products matching search term ${email} fetched successfully!`,
          data:result
      })
    }
       
  } catch(err){
    console.log(err)
  }


    // try{
    //      const result=await OrderServices.getAllOrdersFromDB();
    //      res.status(200).json({
    //         success:true,
    //         message:"Orders fetched Successfully",
    //         data:result
    //     })
    // } catch(err){
    //   console.log(err)
    // }

  }



 export const OrderControllers={
    createOrder,
    getAllOrders
 }