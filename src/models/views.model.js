import mongoose, { Schema } from "mongoose";

const viewsSchema = new Schema({
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

const Views = mongoose.model("Views", viewsSchema)

export default Views