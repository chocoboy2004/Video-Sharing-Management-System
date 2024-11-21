import { Router } from "express";
import {
    toggleLike,
    getLikesByVideoId,
    getTotalLike,
    getLikesByCommentId
} from "../controllers/like.controller.js"
import Auth from "../middlewares/auth.middleware.js"

const router = Router()

router.use(Auth)

router.route("/toggle").get(toggleLike)
router.route("/count_video_like/:videoId").get(getLikesByVideoId)
router.route("/count_likes/total").get(getTotalLike)
router.route("/count_comment_like/:commentId").get(getLikesByCommentId)

export default router