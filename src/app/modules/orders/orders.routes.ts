import express from "express";
import { OrderControllers } from "./orders.controller";

const router=express.Router();

router.post('/', OrderControllers.createOrder )

router.get('/', OrderControllers.getAllOrders )

export const OrdersRoutes=router;