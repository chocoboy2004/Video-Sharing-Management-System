import AsyncHandler from "../utils/AsyncHandler.js"
import HandleResponse from "../utils/HandleResponse.js"
import HandleError from "../utils/HandleResponse.js"
import Like from "../models/like.model.js"

const toggleLike = AsyncHandler(async (req, res) => {})

const getLikesByVideoId = AsyncHandler(async (req, res) => {})

const getTotalLike = AsyncHandler(async (req, res) => {})

const getLikesByCommentId = AsyncHandler(async (req, res) => {})

export {
    toggleLike,
    getLikesByVideoId,
    getTotalLike,
    getLikesByCommentId
}