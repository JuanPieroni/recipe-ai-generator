// Rutas de autenticación
// POST /auth/register - Registrar usuario
// POST /auth/login - Login con email y password
// POST /auth/google - Login con Google
// POST /auth/logout - Logout
import express from "express"
import { register, login, googleAuth } from "../controllers/auth.controller.js"

const router = express.Router()

// POST /api/auth/register - Registrar usuario
router.post("/register", register)

// POST /api/auth/login - Login con email y password
router.post("/login", login)

// POST /api/auth/google - Login con Google
router.post("/google", googleAuth)

export default router
