import { sendResStatus } from "../../utils/response.js"
import Rating from "../../db/Models/rating.js"

export const create = async (req , res) => {
    try {
        const {rate , comment , bookId} = req.body

        await Rating.create({rate , bookId , comment , userId: req.userId})

        sendResStatus(res , 201)
    } catch(e) {
        console.log(e)
        sendResStatus(res , 500)
    }
}