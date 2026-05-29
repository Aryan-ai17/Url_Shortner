import express from "express"
import { createShortUrl, deleteUrl, getMyUrls } from "../controllers/urlController.js"
import { getUrlStats } from "../controllers/urlController.js"
import authMiddleware from "../middleware/auth.middleware.js"
const router =express.Router()
router.post("/shorten",authMiddleware,createShortUrl)
router.get("/stats/:shortCode",authMiddleware,getUrlStats)
router.get(
    "/my-urls",
    authMiddleware,
    getMyUrls
)
router.delete("/:shortCode",authMiddleware,deleteUrl)




export default router
