import { Router } from "express";
import {
    toggleSubscribe,
    getSubscribedUsers
} from "../controllers/subscriber.controller.js"
import Auth from "../middlewares/auth.middleware.js"

const router = Router()

router.use(Auth)

router.route("/toggle").get(toggleSubscribe)
router.route("/list/subscribers").get(getSubscribedUsers)

export default router