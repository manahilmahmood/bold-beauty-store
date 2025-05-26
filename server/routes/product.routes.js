import express from 'express'
import { allproducts, latestproducts, products } from '../controller/product.controller.js'

const router = express.Router()

router.get("/products",products)
router.get("/latestproducts",latestproducts)
router.get("/allproducts",allproducts)

export default router
