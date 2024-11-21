import AsyncHandler from "../utils/AsyncHandler.js";
import HandleResponse from "../utils/HandleResponse.js";
import HandleError from "../utils/HandleError.js";
import uploadOnCloudinary from "../utils/Cloudinary.js";

const uploadVideo = AsyncHandler(async (req, res) => {})

const getVideoById = AsyncHandler(async (req, res) => {})

const getVideosByTitle = AsyncHandler(async (req, res) => {})

const getAllVideos = AsyncHandler(async (req, res) => {})

const deleteVideoById = AsyncHandler(async (req, res) => {})

const updateVideoThumbnail = AsyncHandler(async (req, res) => {})

const updateVideoTitle = AsyncHandler(async (req, res) => {})

const updateVideoDescription = AsyncHandler(async (req, res) => {})

export {
    uploadVideo,
    getVideoById,
    getVideosByTitle,
    getAllVideos,
    deleteVideoById,
    updateVideoThumbnail,
    updateVideoTitle,
    updateVideoDescription
}