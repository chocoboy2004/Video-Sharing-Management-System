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

export default app