const API_URL = 'http://localhost:8080/api/auth'

export const authService = {
    // Registrar nuevo usuario
    register: async (email, password, name) => {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, name })
        })
        const data = await response.json()
        if (data.token) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
        }
        return data
    },

    // Login con email y password
    login: async (email, password) => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        if (data.token) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
        }
        return data
    },

    // Login con Google
    googleAuth: async (googleId, email, name) => {
        const response = await fetch(`${API_URL}/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ googleId, email, name })
        })
        const data = await response.json()
        if (data.token) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
        }
        return data
    },

    // Logout
    logout: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    },

    // Obtener token
    getToken: () => localStorage.getItem('token'),

    // Obtener usuario
    getUser: () => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    }
}
