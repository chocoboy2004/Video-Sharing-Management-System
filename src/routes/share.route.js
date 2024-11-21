import { Router } from "express";
import {
    totalShareCount,
    getSharedVideosByUserId,
    getShareCountByVideoId
} from "../controllers/share.controller.js"
import Auth from "../middlewares/auth.middleware.js";

const router = Router()

router.use(Auth)

router.route("/count/total_share").get(totalShareCount)
router.route("/shared_videos/user/:id").get(getSharedVideosByUserId)
router.route("/count/shared_video/:videoId").get(getShareCountByVideoId)

export default router