import express from "express"

const router = express.Router()

router.get("/:shortCode", (req, res) => {
    res.send(`Redirecting ${req.params.shortCode}`)
})

export default router