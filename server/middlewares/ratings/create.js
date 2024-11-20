import { sendResStatus } from "../../utils/response.js"

export const checkRating = (req , res , next) => {
    const {rate} = req.body

    if(!rate) return sendResStatus(res , 400)

    next()
}