import User from"../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const registerUser = async (req, res) => {
    try {

        const { name,email, password } = req.body

        const existingUser = await User.findOne({
            email
        })

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashedPassword =
            await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()

        return res.status(201).json({
            message: "User registered successfully"
        })

    } catch (error) {

        console.error(error)

        return res.status(500).json({
            message: "Server Error"
        })
    }
}
const loginUser = async (req,res) => {
    try{
        const {email,password}=req.body

        const user=await User.findOne({
            email
        })
        if(!user){
            return res.status(401).json({
                message:"Invalid Credentials"
            })
        }
        const isMatch = await bcrypt.compare(
            password,
            user.password
        )
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Credentials"
            })
        }
        const token = jwt.sign({
            userId: user._id
        },
        process.env.JWT_SECRET
    )
         return res.status(200).json({
            message:"User logged in Successfully",
            token
        })
        
       
              

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message:"Server Error"
        })
    }
    
}

export {registerUser,loginUser}