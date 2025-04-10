import dotenv from "dotenv";

dotenv.config()

export const config = {
    RIOT_API_KEY: process.env.RIOT_API_KEY!
}