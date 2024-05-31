import express from "express";
import { ProductControllers } from "./products.controller";

const router= express.Router()

// will call controller
router.post('/create-product', ProductControllers.createProduct );

router.get('/', ProductControllers.getAllProducts )

router.get('/:productId', ProductControllers.getSingleProduct)

router.put('/:productId', ProductControllers.updateProduct)

router.delete('/:productId', ProductControllers.deleteSingleProduct)

export const ProductsRoutes=router;