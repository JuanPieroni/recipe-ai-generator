import { GoogleGenAI } from "@google/genai";
import { config } from '../config/env.js';

// Inicializar cliente de Gemini con API key
const ai = new GoogleGenAI({
    apiKey: config.geminiApiKey
});

export const generateRecipeWithGemini = async (ingredients, options) => {
    try {
        // Determinar si es una variación
        const isVariation = options.variation === true;
        
        // Construir el prompt base
        let prompt = `
Eres un chef experto. Genera una receta ${isVariation ? 'DIFERENTE y CREATIVA' : 'detallada'} con los siguientes ingredientes y opciones:

Ingredientes disponibles: ${ingredients.join(', ')}
Tipo de cocina: ${options.cuisine}
Para: ${options.servings} personas
Tiempo disponible: ${options.time}

${isVariation ? 'IMPORTANTE: Crea una receta COMPLETAMENTE DIFERENTE a las anteriores. Usa técnicas de cocción distintas, combinaciones creativas y presentación única.' : ''}

Genera una receta en formato JSON con esta estructura exacta:
{
  "title": "Nombre del plato",
  "time": "Tiempo estimado",
  "difficulty": "Fácil/Media/Difícil",
  "ingredients": ["ingrediente 1 con cantidad", "ingrediente 2 con cantidad"],
  "steps": ["paso 1", "paso 2", "paso 3"]
}

Responde SOLO con el JSON, sin texto adicional.
        `;

        // Llamar a Gemini
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
        });

        // Parsear respuesta
        const recipeText = response.text;
        const recipe = JSON.parse(recipeText);

        return recipe;

    } catch (error) {
        console.error('Error con Gemini:', error);
        throw new Error('Error al generar receta con IA');
    }
};
