import dotenv from "dotenv"
dotenv.config()

import validUrl from "valid-url"
import { nanoid } from "nanoid"
import Url from "../models/Url.js"

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
    if (existingUrl){
        return res.status(200).json({
            shortUrl:existingUrl.shortUrl
        })
    }


    const shortCode = nanoid(6)

    const shortUrl =
        `${process.env.BASE_URL}/${shortCode}`

    const newUrl = new Url({
        originalUrl,
        shortCode,
        shortUrl
    })

    await newUrl.save()

    res.status(201).json({
        shortUrl
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

export { createShortUrl }
export {getUrlStats}