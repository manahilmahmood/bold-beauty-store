import { sendResponse,sendError } from "../helper/response.js";
import Users from "../model/auth.model.js"
import jwt from 'jsonwebtoken'

export const isAuth = async (req,res,next)=>{
    try {
        const token = req?.headers?.authorization?.split(" ")[1];
    if (!token){
    return sendResponse (res,false,"Token is required")
}

const decoded = jwt.verify (token,process.env.SECRET_KEY);

req.user = await Users.findById(decoded._id);
 
 next()       
    } catch (error) {
        sendError(res,false,"Server Error")
        
    }
}

export const isAuthoriz = (role = []) => {
    return async (req, res, next) => {
      try {
        if (!req.user) {
          return sendResponse(res, false, "user not found");
        }
        if (!role.includes(req.user.role)) {
          return sendResponse(res, false, "can not access this page");
        }
  
        next();
      } catch (error) {
        sendError(res,false, "Server Error");
      }
    };
  };
  
