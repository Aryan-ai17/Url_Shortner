import express from "express"
const router =express.Router()
router.post("/shorten",(req,res)=>{
    res.send("Shorten URL Route")
})


export default router
