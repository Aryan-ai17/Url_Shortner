import validUrl from "valid-url"
import { nanoid } from "nanoid"
const createShortUrl=async (req,res)=>{
    const {originalUrl}= req.body
    if (!validUrl.isWebUri(originalUrl)) {
    return res.status(400).json({
        message: "Invalid URL"
    })
}
} 

const shortCode=nanoid(6)
console.log(shortCode)
export {createShortUrl}

