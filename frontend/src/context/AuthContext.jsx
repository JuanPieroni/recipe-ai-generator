import { createContext, useState, useEffect } from 'react'
import { authService } from '../services/auth.service.js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    // Cargar usuario al montar
    useEffect(() => {
        const savedToken = authService.getToken()
        const savedUser = authService.getUser()
        if (savedToken && savedUser) {
            setToken(savedToken)
            setUser(savedUser)
        }
        setLoading(false)
    }, [])

    const login = async (email, password) => {
        const data = await authService.login(email, password)
        setUser(data.user)
        setToken(data.token)
        return data
    }

    const register = async (email, password, name) => {
        const data = await authService.register(email, password, name)
        setUser(data.user)
        setToken(data.token)
        return data
    }

    const googleAuth = async (googleId, email, name) => {
        const data = await authService.googleAuth(googleId, email, name)
        setUser(data.user)
        setToken(data.token)
        return data
    }

    const logout = () => {
        authService.logout()
        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, loading, login, register, googleAuth, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
