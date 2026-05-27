import express from "express"
import { createShortUrl } from "../controllers/urlController.js"
import { getUrlStats } from "../controllers/urlController.js"
import authMiddleware from "../middleware/auth.middleware.js"
const router =express.Router()
router.post("/shorten",authMiddleware,createShortUrl)
router.get("/stats/:shortCode",getUrlStats)




export default router
