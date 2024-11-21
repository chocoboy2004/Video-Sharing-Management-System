import mongoose, { Schema } from "mongoose";

const shareSchema = new Schema({
    sharedVideo: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true
    },
    sharedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

const Share = mongoose.model("Share", shareSchema)

export default Share