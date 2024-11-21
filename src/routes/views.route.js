import { Router } from "express";
import {
    getViewersList,
    getViewerCount
} from "../controllers/views.controller.js"
import Auth from "../middlewares/auth.middleware.js"

const router = Router()

router.use(Auth)

router.route("/list/viewers").get(getViewersList)
router.route("/count/viewers").get(getViewerCount)

export default router