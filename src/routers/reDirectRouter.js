import express from "express"
import { redirectUrl } from "../controllers/reDirectControllers.js"

const router = express.Router()

router.get("/:shortCode",redirectUrl)


export default router