import OpenAI from 'openai'
import { config } from '../config/env.js'

// Inicializar cliente de OpenAI
const openai = new OpenAI({
    apiKey: config.openaiApiKey
})

export const generateRecipeWithAI = async (ingredients, options) => {
    try {
        // Construir el prompt para la IA
        const prompt = `
Eres un chef experto. Genera una receta detallada con los siguientes ingredientes y opciones:

Ingredientes disponibles: ${ingredients.join(', ')}
Tipo de cocina: ${options.cuisine}
Para: ${options.servings} personas
Tiempo disponible: ${options.time}

Genera una receta en formato JSON con esta estructura exacta:
{
  "title": "Nombre del plato",
  "time": "Tiempo estimado",
  "difficulty": "Fácil/Media/Difícil",
  "ingredients": ["ingrediente 1 con cantidad", "ingrediente 2 con cantidad"],
  "steps": ["paso 1", "paso 2", "paso 3"]
}

Responde SOLO con el JSON, sin texto adicional.
        `

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "Eres un chef experto que genera recetas en formato JSON."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 1000
        })

        // Extraer y parsear la respuesta
        const recipeText = response.choices[0].message.content
        const recipe = JSON.parse(recipeText)

        return recipe

    } catch (error) {
        console.error('Error con OpenAI:', error)
        throw new Error('Error al generar receta con IA')
    }
}
