import validUrl from "valid-url"
const createShortUrl=async (req,res)=>{
    const {originalUrl}= req.body
    if (!validUrl.isWebUri(originalUrl)) {
    return res.status(400).json({
        message: "Invalid URL"
    })
}
} 

