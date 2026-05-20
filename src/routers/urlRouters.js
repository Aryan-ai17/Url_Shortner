import express from "express"
const router =express.Router()
router.post("/shorten",createShortUrl)
router.get("/stats/:shortCode",getUrlStats)


export default router
import { createShortUrl } from "../controllers/urlController.js"
import { getUrlStats } from "../controllers/urlController.js"