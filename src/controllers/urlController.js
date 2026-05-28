import dotenv from "dotenv"
dotenv.config()

import validUrl from "valid-url"
import { nanoid } from "nanoid"
import Url from "../models/Url.js"
import QRCode from "qrcode"

const createShortUrl = async (req, res) => {
    try{
    const { originalUrl } = req.body

    if (!validUrl.isWebUri(originalUrl)) {
        return res.status(400).json({
            message: "Invalid URL"
        })
    }
    const existingUrl = await Url.findOne({
        originalUrl
    })
    if (existingUrl) {

    const qrCode =
        await QRCode.toDataURL(existingUrl.shortUrl)

    return res.status(200).json({
        shortUrl: existingUrl.shortUrl,
        qrCode
    })
}


    const shortCode = nanoid(6)

    const shortUrl =
        `${process.env.BASE_URL}/${shortCode}`
    const qrCode= await QRCode.toDataURL(shortUrl)   

    const newUrl = new Url({
        originalUrl,
        shortCode,
        shortUrl,
        user: req.user.userId
    })

    await newUrl.save()

    res.status(201).json({
        shortUrl,
        qrCode
    })
}
   catch(error){
    return res.status(500).json({
        message:"Server Error"
    })
}
}
const getUrlStats = async (req,res) => {
    try{
    const { shortCode } = req.params
    
        const url = await Url.findOne({
            shortCode
        })
    
        if (!url) {
            return res.status(404).json({
                message: "URL not Found"
            })
            
        }
        return res.status(200).json({
                originalUrl: url.originalUrl,
                shortUrl: url.shortUrl,
                shortCode: url.shortCode,
                clicks: url.clicks,
                createdAt: url.createdAt
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Server Error"
        })    

}
}
const getMyUrls= async (req,res) => {
    try {
        const userId=req.user.userId
        const urls= await Url.find({
            user:userId
        })
        return res.status(200).json({
            urls
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        })
        
    }
    
}
export { createShortUrl }
export {getUrlStats}
export {getMyUrls}