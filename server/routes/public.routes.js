import express from 'express'
import{ browserproducts, productslist, viewproducts } from '../controller/public.controller.js'

const router = express.Router()

router.get("/viewproducts",viewproducts)
router.get("/productslist",productslist)
router.get("/browserproducts",browserproducts)

export default router
