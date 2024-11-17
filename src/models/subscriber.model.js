import mongoose, { Schema } from "mongoose";

const subscriberSchema = new Schema({
    subscribedTo: {  // My ID
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    subscribedBy: {  // my subscriber ID
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

const Subscriber = mongoose.model("Subscriber", subscriberSchema)

export default Subscriber