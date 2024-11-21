import AsyncHandler from "../utils/AsyncHandler.js"
import HandleResponse from "../utils/HandleResponse.js"
import HandleError from "../utils/HandleResponse.js"
import Subscriber from "../models/subscriber.model.js"

const toggleSubscribe = AsyncHandler(async (req, res) => {})

const getSubscribedUsers = AsyncHandler(async (req, res) => {})

export {
    toggleSubscribe,
    getSubscribedUsers
}