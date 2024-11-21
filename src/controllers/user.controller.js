import AsyncHandler from "../utils/AsyncHandler.js"
import HandleResponse from "../utils/HandleResponse.js"
import HandleError from "../utils/HandleResponse.js"
import uploadOnCloudinary from "../utils/Cloudinary.js"
import User from "../models/user.model.js"

const signUp = AsyncHandler(async (req, res) => {})

const signIn = AsyncHandler(async (req, res) => {})

const signOut = AsyncHandler(async (req, res) => {})

const deleteUser = AsyncHandler(async (req, res) => {})

const getCurrentUser = AsyncHandler(async (req, res) => {})

const changeDisplayName = AsyncHandler(async (req, res) => {})

const changeUserName = AsyncHandler(async (req, res) => {})

const updateEmail = AsyncHandler(async (req, res) => {})

const updatePhoneNumber = AsyncHandler(async (req, res) => {})

const updateProfilePic = AsyncHandler(async (req, res) => {})

const updateBannerPic = AsyncHandler(async (req, res) => {})

const updatePassword = AsyncHandler(async (req, res) => {})


export {
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
}