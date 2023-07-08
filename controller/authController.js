import { comparePassword,hashPassword } from "../helper/authHelper.js";
import contactModel from "../models/contactModel.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken"

export const registerController=async(req,res)=>{
    try{
        const {email,password,phone,address,firstname,lastname}=req.body;
        //validations
        if(!firstname){
            return res.send({message:"firstname is Required"});
        }
        if(!lastname){
            return res.send({message:"lastname is Required"});
        }
        if(!email){
            return res.send({message:"Email is Required"});
        }
        if(!password){
            return res.send({message:"Password is Required"});
        }
        if(!phone){
            return res.send({message:"Phone no is Required"});
        }
        if(!address){
            return res.send({error:"Address is Required"});
        }
        //check user
        const exisitingUser=await userModel.findOne({email});
        //exisiting user
        if(exisitingUser){
            return res.status(200).send({
                success:false,
                message:"Already Register please login",
            })
        
        }
        //register user
        const hashedPassword=await hashPassword(password);
        //save
        const user=await new userModel({email,phone,address,password:hashedPassword,firstname,lastname}).save();
        res.status(201).send({
            success:true,
            message:"user register successfully",
            user
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Resiteration",
            error
        })
    }
}




//POST||login
export const loginController=async(req,res)=>{
    try{
        const{email,password}=req.body;
        //validation
        if(!email ||!password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        //check user
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"email is not registered"
            })
        }
        const match=await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password"
            })
        }
        //token
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d",
        })
        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
                phone:user.phone,
                _id:user._id,
                role:user.role,
                address:user.address,
            },
            token,
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
}


//contact 
export const contactController=async(req,res)=>{
    try{
        const {name,email,phone,message}=req.body;
        //validations
        if(!name){
            return res.send({message:"Name is Required"});
        }

        if(!email){
            return res.send({message:"Email is Required"});
        }
      
        if(!phone){
            return res.send({message:"Phone no is Required"});
        }
        if(!message){
            return res.send({error:"Message is Required"});
        }
    
        const user=await new contactModel({name,email,phone,message}).save();
        res.status(201).send({
            success:true,
            message:"Query send successfully",
            user
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in creating message",
            error
        })
    }
}
