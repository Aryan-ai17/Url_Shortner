import Url from "../models/url.js"

const redirectUrl = async (req, res) => {
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
    url.clicks += 1
    await url.save()

    res.redirect(url.originalUrl)
} catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Server Error"
        })
}
}


export { redirectUrl }