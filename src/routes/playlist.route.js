import { Router } from "express";
import {
    createPlaylist,
    getPlaylistById,
    getPlaylistsByTitle,
    getAllPlaylists,
    deletePlaylistById,
    deleteAllPlaylists,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    updatePlaylistTitle,
    updatePlaylistDescription,
} from "../controllers/playlist.controller.js"
import Auth from "../middlewares/auth.middleware.js"

const router = Router()

router.use(Auth)

router.route("/create").post(createPlaylist)
router.route("/get/playlist/:id").get(getPlaylistById)
router.route("/get/playlist/by/title").get(getPlaylistsByTitle)
router.route("/list").get(getAllPlaylists)
router.route("/delete/playlist/:id").delete(deletePlaylistById)
router.route("/delete/all").delete(deleteAllPlaylists)
router.route("/add/video").post(addVideoToPlaylist)
router.route("/remove/video").delete(removeVideoFromPlaylist)
router.route("/update/title").patch(updatePlaylistTitle)
router.route("/update/description").patch(updatePlaylistDescription)

export default router