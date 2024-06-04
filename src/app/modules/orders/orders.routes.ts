import express from "express";
import { OrderControllers } from "./orders.controller";

const router=express.Router();

router.post('/create-order', OrderControllers.createOrder )

router.get('/', OrderControllers.getAllOrders )

export const OrdersRoutes=router;