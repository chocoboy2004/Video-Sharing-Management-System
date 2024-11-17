import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

const userSchema = new Schema({
    displayName: {
        type: String,
        required: [true, "Display name is required!"],
        trim: true,
        index: true
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        trim: true,
        lowercase: true,
        index: true
    },
    phoneNo: {
        type: Number,
        required: [true, "Phone number is required!"],
        index: true
    },
    profilePic: {
        type: String // cloudinary URL
    },
    bannerPic: {
        type: String // cloudinary URL
    },
    profileDescription: {
        type: String,
        trim: true
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        trim: true,
        minLength: 8,
        maxLength: 16
    }
}, { timestamps: true })

userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    } else {
        next()
    }
})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    return JWT.sign(
        {
            _id: this._id,
            email: this.email,
            phoneNo: this.phoneNo
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model("User", userSchema)

export default User