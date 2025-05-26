import express from 'express'
import {client, allproducts, newproducts } from '../controller/admin.controller.js'

const router = express.Router()

router.get("/client",client)
router.get("/newproducts",newproducts)
router.get("/allproducts",allproducts)


export default router