
import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs";
export const register  = async(req,res) => {
    try {
       
        const {fullname,email,phoneNumber,password,role}=req.body;
        if(!fullname || !email || !phoneNumber || !password){
           return res.status(404)
           .json({
            message:"Something is missing",
            success:false
           })
           const user = await UserActivation.findOne({email})
           if(user){
            return res.status(400).json({
                message:"User already exists with this email",
                success:true,
            })
           }
        }
        const hashedPassowrd = await bcrypt.hash(password,10);

        await UserActivation.create({
            fullname,
            email,
            password:hashedPassowrd,
            role,
            
        })

    } catch (error) {
        
    }

}


    
