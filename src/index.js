import connectDB from "./database/db.connect.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

connectDB()