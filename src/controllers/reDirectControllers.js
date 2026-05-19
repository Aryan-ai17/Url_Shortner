import Url from "../models/Url.js"

const redirectUrl = async (req, res) => {
    const { shortCode } = req.params

    const url = await Url.findOne({
        shortCode
    })

    if (!url) {
        return res.status(404).json({
            message: "URL not Found"
        })
    }

    res.redirect(url.originalUrl)
}

export { redirectUrl }