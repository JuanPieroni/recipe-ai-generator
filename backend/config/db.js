// Configuración de conexión a MongoDB
// Aquí va el código para conectar con mongoose

import mongoose from "mongoose"
import { config } from "./env.js"

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodbUri)
        console.log("✅ MongoDB conectado exitosamente")
    } catch (error) {
        console.error("❌ Error conectando a MongoDB:", error)
        process.exit(1)
    }
}
