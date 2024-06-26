import express from "express";
import { ProductControllers } from "./products.controller";

const router= express.Router()

// will call controller
router.post('/', ProductControllers.createProduct );

router.get('/', ProductControllers.getAllProducts )

router.get('/:productId', ProductControllers.getSingleProduct)

router.put('/:productId', ProductControllers.updateProduct)

router.delete('/:productId', ProductControllers.deleteSingleProduct)

// router.get('/',ProductControllers.searchProducts)

export const ProductsRoutes=router;