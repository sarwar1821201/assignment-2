import express from "express";
import { ProductControllers } from "./products.controller";

const router= express.Router()

// will call controller
router.post('/create-product', ProductControllers.createProduct  )