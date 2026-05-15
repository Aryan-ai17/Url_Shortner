import express from "express"
import urlRouters from "./src/routers/urlRouters.js"
import reDirectRouter from "./src/routers/reDirectRouter.js"
const app=express()

const port = 3000

app.use(express.json())

app.use("/api/url",urlRouters)
app.use("/",reDirectRouter)

app.get("/",(req,res)=>{
  res.send("Api Running")
})

app.listen(port, () => {
  console.log(`Server running on Port ${port}`)
})
