import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json({ limit: "100kb" }))
app.use(express.urlencoded({ limit: "100kb", extended: true }))
app.use(express.static("public/temp"))

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser())



import userRoute from "./routes/user.route.js"
import videoRoute from "./routes/video.route.js"
import subscriberRoute from "./routes/subscriber.route.js"
import viewsRoute from "./routes/views.route.js"
import shareRoute from "./routes/share.route.js"
import playlistRoute from "./routes/playlist.route.js"
import likeRoute from "./routes/like.route.js"
import commentRoute from "./routes/comment.route.js"

app.use("/api/v1/user", userRoute)
app.use("/api/v1/video", videoRoute)
app.use("/api/v1/subscriber", subscriberRoute)
app.use("/api/v1/views", viewsRoute)
app.use("/api/v1/share", shareRoute)
app.use("/api/v1/playlist", playlistRoute)
app.use("/api/v1/like", likeRoute)
app.use("/api/v1/comment", commentRoute)

export default app