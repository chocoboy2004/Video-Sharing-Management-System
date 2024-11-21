import AsyncHandler from "../utils/AsyncHandler.js"
import HandleResponse from "../utils/HandleResponse.js"
import HandleError from "../utils/HandleResponse.js"
import Share from "../models/share.model.js"

const totalShareCount = AsyncHandler(async (req, res) => {})

const getSharedVideosByUserId = AsyncHandler(async (req, res) => {})

const getShareCountByVideoId = AsyncHandler(async (req, res) => {})

export {
    totalShareCount,
    getSharedVideosByUserId,
    getShareCountByVideoId
}