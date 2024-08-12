
import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
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
        return res.status(200).json({
            message:"Account created successfully",
            success:true,
        })

    } catch (error) {
        console.log(error);
    }

}


export const login =  async(req,res)=>{
    try {
        const {email,password,role}= req.body;
        if(!email || !password || !role){
            return res.status(400).json({
                message:"Invalid",
                success:false
            });
        };
        let user = await User.findOne({email});
        if(!user){
           return res.status(404).json({
            message:"Incorrect email or password",
            success:true,
           })
        }

        const isPasswordMatch= await bcrypt.companre(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false,
               })
        };
        //check role is right or not
        if(role === user.role ){
            return res.status(400).json({
                message:"Account does not exist with current role",
                success:false,
            })
        }

        const tokenData ={
            userId:user._id,
        }
        const token  = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

        user = {
            id : _id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile,


        }

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true, sameSite:'strict'}).json({
            message:`Welcome back ${user.fullname}`,
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
}

export const logout = async(req,res)=>{
    try {
       return res.status(200).cookie("token","",{maxAge:0}).json({
        message:"Logged out successfully",
        success:true,
       })  
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile=async(req,res)=>{
    try {
        const {fullname,email,phoneNUmber,bio,skills}=req.body;
        const file = req.file;
        if(!fullname || !email || !phoneNumber || !bio  || !skills){
            return res.status(404)
            .json({
             message:"Something is missing",
             success:false
            })
        }
        // cloudnary link

        const skillsArray = skills.split(",");
        const userId = req.id;//middleware authenication
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                  
            })
        }

        //updating data
        user.fullname = fullname
        user.email = email
        user.phoneNumber = phoneNumber
        user.profile.bio = bio
        user.profile.skills = skillsArray
        //resume comes later here...

        await User.save();
        user = {
            id : _id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile,


        }
        return res.status(200).json({
            message:"Profile updated succesfully",
            user,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
    
