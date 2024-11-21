import { Router } from "express";
import {
    uploadVideo,
    getVideoById,
    getVideosByTitle,
    getAllVideos,
    deleteVideoById,
    updateVideoThumbnail,
    updateVideoTitle,
    updateVideoDescription
} from "../controllers/video.controller.js"
import upload from "../middlewares/multer.middleware.js";
import Auth from "../middlewares/auth.middleware.js";

const router = Router()

router.use(Auth)

router.route("/upload").post(
    upload.fields([ 
        { name: "video_file", maxCount: 1 }, 
        { name: "thumbnail", maxCount } 
    ]), uploadVideo
)

router.route("/get_video/:id").get(getVideoById)
router.route("/title").get(getVideosByTitle)
router.route("/list_videos").get(getAllVideos)
router.route("/delete/:id").delete(deleteVideoById)

router.route("/update/thumbnail").patch(
    upload.single("thumbnail"),
    updateVideoThumbnail
)

router.route("/update/title").patch(updateVideoTitle)
router.route("/update/description").patch(updateVideoDescription)

export default router