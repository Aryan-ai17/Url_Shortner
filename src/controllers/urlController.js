import dotenv from "dotenv"
dotenv.config()

import validUrl from "valid-url"
import { nanoid } from "nanoid"
import Url from "../models/Url.js"

const createShortUrl = async (req, res) => {
    const { originalUrl } = req.body

    if (!validUrl.isWebUri(originalUrl)) {
        return res.status(400).json({
            message: "Invalid URL"
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

export { createShortUrl }