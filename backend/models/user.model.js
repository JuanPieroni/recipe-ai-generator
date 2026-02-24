import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: function() {
            return !this.googleId
        }
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Hook: Hashear contraseña antes de guardar
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()
    
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})

// Método: Comparar contraseña ingresada con la hasheada
userSchema.methods.comparePassword = async function(passwordIngresada) {
    return await bcrypt.compare(passwordIngresada, this.password)
}

export default mongoose.model('User', userSchema)
