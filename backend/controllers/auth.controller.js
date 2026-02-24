// Controlador de autenticación
// Funciones: register, login, googleAuth, logout
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { config } from '../config/env.js'

// Generar JWT token
const generateToken = (userId) => {
    return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '7d' })
}

// Register - Crear nuevo usuario
export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body

        // Validar que no esté vacío
        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Email, contraseña y nombre son requeridos' })
        }

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ error: 'El email ya está registrado' })
        }

        // Crear nuevo usuario
        const user = new User({ email, password, name })
        await user.save()

        // Generar token
        const token = generateToken(user._id)

        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            token,
            user: { id: user._id, email: user.email, name: user.name }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Login - Autenticar usuario
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email y contraseña son requeridos' })
        }

        // Buscar usuario
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: 'Email o contraseña incorrectos' })
        }

        // Verificar contraseña
        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Email o contraseña incorrectos' })
        }

        // Generar token
        const token = generateToken(user._id)

        res.json({
            message: 'Login exitoso',
            token,
            user: { id: user._id, email: user.email, name: user.name }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Google OAuth - Crear o actualizar usuario
export const googleAuth = async (req, res) => {
    try {
        const { googleId, email, name } = req.body

        if (!googleId || !email || !name) {
            return res.status(400).json({ error: 'googleId, email y name son requeridos' })
        }

        // Buscar usuario por googleId
        let user = await User.findOne({ googleId })

        if (!user) {
            // Si no existe, crear nuevo usuario
            user = new User({ googleId, email, name })
            await user.save()
        }

        // Generar token
        const token = generateToken(user._id)

        res.json({
            message: 'Login con Google exitoso',
            token,
            user: { id: user._id, email: user.email, name: user.name }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
