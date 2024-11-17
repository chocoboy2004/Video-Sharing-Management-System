import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true
    },
    commentBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

const Comment = mongoose.model("Comment", commentSchema)

export default Comment