// Modelo de Receta
// Schema: userId (referencia a User), title, ingredients, steps, time, difficulty, savedAt
import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    steps: [{
        type: String,
        required: true
    }],
    time: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    savedAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Recipe', recipeSchema)
