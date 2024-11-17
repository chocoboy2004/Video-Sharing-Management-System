import mongoose, { Schema } from "mongoose";

const shareSchema = new Schema({
    viewedVideo: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true
    },
    viewedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

const Share = mongoose.model("Share", shareSchema)

export default Share