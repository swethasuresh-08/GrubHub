import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//Login User

export const loginUser = async (req, res) => {
    const {email,password}=req.body
    try{
        const user=await userModel.findOne({email})
        if(!user)
        {
            res.json({
                success:false,
                message:"User Not Found"
            })
        }
        else
        {
            const isPasswordMatch=await bcrypt.compare(password,user.password)
            if(!isPasswordMatch)
            {
                res.json({
                    success:false,
                    message:"Invalid Password"
                })
            }
         
            const token=createToken(user._id)
            res.json({
                success:true,
                message:"Login Success",
                token
            })
        }
    }catch(error)
    {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
//Create a token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
//Register User
export const registerUser = async (req, res) => {

    const { name, email, password } = req.body
    try {
        const exist = await userModel.findOne({ email })
        if (exist) {
            res.json({ success: false, message: "User Already Exists" })
        }
        if (!validator.isEmail(email)) {
            res.json({
                success: false,
                message: "Not a valid Email"
            })
        }
        if (password.length<5) {
            res.json({
                success: false,
                message: "Enter a Strong Password"
            })
        }
        //Encrypt the password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({
            success: true,
            message: "User Registered SuccessFully",
            token
        })
    }
    catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error
        })
    }
}