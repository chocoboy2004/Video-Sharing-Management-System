import { Router } from "express"
import {
    signUp,
    signIn,
    signOut,
    deleteUser,
    getCurrentUser,
    changeDisplayName,
    changeUserName,
    updateEmail,
    updatePhoneNumber,
    updateProfilePic,
    updateBannerPic,
    updatePassword
} from "../controllers/user.controller.js"
import upload from "../middlewares/multer.middleware.js"
import Auth from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/signup").post(
    upload.fields([
        { name: "profilePic", maxCount: 1 },
        { name: "bannerPic", maxCount: 1 }
    ]), signUp
)

router.route("/login").post(signIn)


router.use(Auth)

router.route("/logout").get(signOut)
router.route("/delete/profile").delete(deleteUser)
router.route("/current_user").get(getCurrentUser)
router.route("/update/displayName").patch(changeDisplayName)
router.route("/update/userName").patch(changeUserName)
router.route("/update/email").patch(updateEmail)
router.route("/update/phone").patch(updatePhoneNumber)

router.route("/update/profilePic").patch(
    upload.single("profilePic"),
    updateProfilePic
)

router.route("/update/bannerPic").patch(
    upload.single("bannerPic"),
    updateBannerPic
)

router.route("/update/password").patch(updatePassword)


export default router