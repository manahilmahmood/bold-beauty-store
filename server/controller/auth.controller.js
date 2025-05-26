import { sendError, sendResponse, sendToken, hashPassword } from "../helper/response.js";
import Users from '../model/auth.model.js'
import { promises as fsPromises } from "fs";
import path from "path";


// Registraion

export const register = async (req,res) =>{
   
   try {
     const {name,password,email} = req.body;

     if(!name || !password || !email){
        return sendResponse(res, false, msg.required_field);
     }

    const user = await Users.findOne({email:email})

    if(user){
        return sendResponse(res, false,"User already exists");
    }
    const data = {
        ...req.body,
        role: "user",
        password: await hashPassword(password),
      };


    const newUser = new Users(data) 
    await newUser.save();
    return sendToken(res,newUser,"User register successfully");
         
} catch (error){
    sendError(res, false,"Internal server error");
}
};


// Login
export const login = async(req, res) => {

    try {
        const {email,password} = req.body
   if (!email||!password){
    return res.status(400).json({status:false, message: "All fields are required"})
   } 
   const user = await Users.findOne({ email });
     if (!user) {
       return sendResponse(res, false, "user not found");
  }

     const isMatch = await user.isPassMatch(password);

     if (!isMatch) {
       return sendResponse(res, false, "password not valid");
  }

    
  return sendToken(res, user, "Login successful")

    } catch (error) {
        return res.status(500).json({status:false , message:"server is fail"})
        
    }
    
}

// Profile

export const profile = async (req, res) => {
    try {
     if(!req.user)
        return sendResponse(res,false, "Id not found")
  
      return res
        .status(200)
        .json({ status: true, message: "user profile ", user:req.user });
    } catch (error) {
      return res
        .status(200)
        .json({ status: true, message: "user profile ", error });
    }
  };

// updateProfile

  export const updateProfile = async (req, res) => {
    try {
      if (!req.user) {
        return sendResponse(res, false,"User not Found");
      }
  
      const update = await Users.findByIdAndUpdate( { _id: req.user._id },
           req.body,
        {
          new: true,
        }
      );
      return sendResponse(res, true, "Profile Updated Succesfully ", update);
    } catch (error) {
      sendError(res,false,"Server Error");
    }
  };

// change password

export const changePassword = async (req, res) => {
  try {
    if (!req.user) {
      return sendResponse(res, false, "User not found");
    }

    const { newPassword, oldPassword } = req.body;

    if (!newPassword || !oldPassword) {
      return sendResponse(res, false, "Both new and old passwords are required");
    }

    const isMatch = await req.user.isPassMatch(oldPassword);

    if (!isMatch) {
      return sendResponse(res, false, "Incorrect password");
    }

    const pass = { password: await hashPassword(newPassword) };

    const update = await Users.findByIdAndUpdate(req.user._id, pass, {
      new: true,
    });

    return sendResponse(res, true, "Password change successfully", update);
  } catch (error) {
    return sendError(res, false, "Server Error");
  }
};


export const uploadPic = async (req, res) => {
  try {
    if (!req.user) {
      return sendResponse(res, false, "user not found");
    }

    if (!req.file) {
      return sendResponse(res, false, "please choose file");
    }

    // Build the old profile picture path
    const oldPicPath = path.join("public", "profile", req.user.profile_pic);

    // If user has a custom profile picture, delete it (non-blocking)
    if (req.user.profile_pic !== "avatar.png") {
      try {
        await fsPromises.access(oldPicPath); // Check if file exists
        await fsPromises.unlink(oldPicPath); // Delete the file
      } catch (err) {
        console.warn(`Old profile picture not found: ${oldPicPath}`);
        // No crash if file doesn't exist — just warn
      }
    }

    // Update user with new profile picture
    const updatedData = { profile_pic: req.file.filename };

    const updatedUser = await Users.findByIdAndUpdate(req.user._id, updatedData, {
      new: true,
    });

    return sendResponse(res, true, "Profile picture updated successfully", updatedUser);
  } catch (error) {
    return sendError(res, "Server Error");
  }
};