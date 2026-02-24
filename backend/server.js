import express from "express"
import cors from "cors"
import { config } from "./config/env.js"
import {connectDB} from './config/db.js'
import recipeRoutes from "./routes/recipe.routes.js"
import authRoutes from "./routes/auth.routes.js"

const app = express()
//conectar a mongo
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "Recipe AI Generator API" })
})
app.use('/api/recipes', recipeRoutes)
app.use('/api/auth', authRoutes)

app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`)
})
