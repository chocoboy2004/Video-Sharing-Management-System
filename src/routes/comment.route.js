import { Router } from "express";
import {
    createComment,
    getCommentsByVideoId,
    deleteCommentByVideoId,
    updateCommentById,
    getMyComments,
    countComments,
    countCommentsByVideoId
} from "../controllers/comment.controller.js"
import Auth from "../middlewares/auth.middleware.js";

const router = Router()

router.use(Auth)

router.route("/create").post(createComment)
router.route("/get/video_comments/:videoId").get(getCommentsByVideoId)
router.route("/delete/video_comments/:videoId").delete(deleteCommentByVideoId)
router.route("/update/:commentId").patch(updateCommentById)
router.route("/list/my_all_comments").get(getMyComments)
router.route("/count/comments").get(countComments)
router.route("/count/video_comments/:videoId").get(countCommentsByVideoId)

export default router