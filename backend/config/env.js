import dotenv from "dotenv"

dotenv.config()

export const config = {
    port: process.env.PORT || 8080,
    openaiApiKey: process.env.OPENAI_API_KEY,
    geminiApiKey: process.env.GEMINI_API_KEY,
    aiProvider: process.env.AI_PROVIDER || "gemini",
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET
}
