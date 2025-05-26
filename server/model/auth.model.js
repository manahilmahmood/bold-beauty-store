import mongoose from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({

    name:String,
    email:{
        type:String,
        unique:true,
    },
    password:String,
    phone:String,
    profile_pic:{
        type:String,
        default: "../public/profile/avatar.png"
    },
    address:{
        city:String,
        state:String,
        country:String,
    },

    role: {
    type: String,
    enum: ["user", "admin", "super-admin", "manager"],
  },

    created_at:{
        type:Date,
        default:Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
    
})
userSchema.methods.isPassMatch = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

userSchema.methods.getAuthToken = async function() {
  return await Jwt.sign({_id: this._id},process.env.SECRET_KEY);
}



export default mongoose.model("user", userSchema);