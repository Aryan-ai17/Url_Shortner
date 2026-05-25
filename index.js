import express from "express"
import urlRouters from "./src/routers/urlRouters.js"
import reDirectRouter from "./src/routers/reDirectRouter.js"
import connectDB from "./src/config/db.js"
import dotenv from "dotenv"
import authRouter from "./src/routers/authRouter.js"

dotenv.config()
console.log(process.env.MONGO_URI)

connectDB()
const app=express()

const port = 3000

app.use(express.json())

app.use("/api/url",urlRouters)
app.use("/",reDirectRouter)
app.use("/api/auth",authRouter)
app.get("/",(req,res)=>{
  res.send("Api Running")
})

app.listen(port, () => {
  console.log(`Server running on Port ${port}`)
})
