import AsyncHandler from "../utils/AsyncHandler.js"
import HandleResponse from "../utils/HandleResponse.js"
import HandleError from "../utils/HandleResponse.js"
import Comment from "../models/comment.model.js"

const createComment = AsyncHandler(async (req, res) => {})

const getCommentsByVideoId = AsyncHandler(async (req, res) => {})

const deleteCommentByVideoId = AsyncHandler(async (req, res) => {})

const updateCommentById = AsyncHandler(async (req, res) => {})

const getMyComments = AsyncHandler(async (req, res) => {})

const countComments = AsyncHandler(async (req, res) => {})

const countCommentsByVideoId = AsyncHandler(async (req, res) => {})

export {
    createComment,
    getCommentsByVideoId,
    deleteCommentByVideoId,
    updateCommentById,
    getMyComments,
    countComments,
    countCommentsByVideoId
}