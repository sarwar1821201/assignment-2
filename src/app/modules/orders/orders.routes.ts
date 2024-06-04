import express from "express";
import { OrderControllers } from "./orders.controller";

const router=express.Router();

router.post('/create-order', OrderControllers.createOrder )

export const OrdersRoutes=router;