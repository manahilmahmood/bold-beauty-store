import express from 'express'
import { login,register,profile, updateProfile, changePassword, uploadPic } from '../controller/auth.controller.js'
import {isAuth, isAuthoriz } from '../middleware/isAuth.js'
import { upload } from '../middleware/storage.js'

const router = express.Router()

router.post ("/login",login)
router.post ("/register", register)
router.get("/profile",isAuth,isAuthoriz(["user", "admin", "manager","super-admin"]),profile);
router.put("/update-profile", isAuth, updateProfile);
router.put("/change-password", isAuth, changePassword);
router.post("/upload-picture", isAuth,upload,uploadPic);
export default router