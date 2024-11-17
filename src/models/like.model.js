import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema({
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Liked by is required!"]
    },
    likedVideo: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    likedComment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
}, { timestamps: true })

const Like = mongoose.model("Like", likeSchema)

export default Like