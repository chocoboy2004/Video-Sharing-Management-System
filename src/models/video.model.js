import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String, // cloudinary URL
        required: [true, "Video file is required!"]
    },
    thumbnail: {
        type: String, // cloudinary URL
        required: [true, "Thumbnail is required!"]
    },
    title: {
        type: String,
        required: [true, "Title is required!"],
        trim: true,
        maxLength: 100,
        minLength: 1,
        index: true
    },
    description: {
        type: String,
        trim: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Owner is required!"]
    },
    duration: {
        type: Number,
        required: [true, "Video duration is required!"]
    }
}, { timestamps: true })

const Video = mongoose.model("Video", videoSchema)

export default Video