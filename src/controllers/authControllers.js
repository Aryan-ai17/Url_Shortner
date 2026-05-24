import User from"../models/user.js"
import bcrypt from "bcryptjs"
const registerUser = async (req, res) => {
    try {

        const { email, password } = req.body

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

export {registerUser}