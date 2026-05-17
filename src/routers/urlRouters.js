import express from "express"
const router =express.Router()
router.post("/shorten",createShortUrl)



export default router
import { createShortUrl } from "../controllers/urlController.js"
