import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video",
            required: true
        }
    ]
}, { timestamps: true })

const Playlist = mongoose.model("Playlist", playlistSchema)

export default Playlist