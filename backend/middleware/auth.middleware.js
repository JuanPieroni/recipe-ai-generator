// Middleware de autenticación
// Verifica JWT token en headers y agrega usuario al request
import jwt from 'jsonwebtoken'
import { config } from '../config/env.js'

export const authMiddleware = (req, res, next) => {
    try {
        // Obtener token del header Authorization
        const token = req.headers.authorization?.split(' ')[1]
        
        if (!token) {
            return res.status(401).json({ error: 'Token no proporcionado' })
        }

        // Verificar token
        const decoded = jwt.verify(token, config.jwtSecret)
        req.userId = decoded.userId
        next()
    } catch (error) {
        res.status(401).json({ error: 'Token inválido o expirado' })
    }
}
