import rateLimit from "express-rate-limit"
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max:100,
    message:{
        message: "Too many requests,try again later"
    }

})
export default apiLimiter