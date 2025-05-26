import bcrypt from "bcryptjs";

export const sendToken = async (res,user,msg) =>{
  const token = await user.getAuthToken();

 res.status(200).json({
  status:true,
  message:msg,
  accesstoken: token,
  content:{
    name:user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    profile_pic: user.profile_pic
  }
 })
}



export const sendResponse = (res, status, msg, user) => {
    res.status(status ? 200 : 400).json({ 
      status: status,
      message: msg,
      content:{
        name:user?.name,
       email: user?.email,
       phone: user?.phone,
       role: user?.role,
       profile_pic: user?.profile_pic

      }
    })
  }
  export const sendError = (res, msg) => {
    res.status(500).json({ status: false, message:msg });
  };


  export const hashPassword = async (pass) => await bcrypt.hash(pass, 10); 