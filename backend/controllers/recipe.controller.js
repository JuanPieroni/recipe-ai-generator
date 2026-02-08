
import { generateRecipeWithAI } from '../services/ai.service.js';



export const generateRecipe = async (req, res) => {
    try {
        const { ingredients, options } = req.body;

        // Validar que haya ingredientes
        if (!ingredients || ingredients.length === 0) {
            return res.status(400).json({ error: "Se requieren ingredientes" });
        }

        // Generar receta con IA (Gemini u OpenAI según config)
        const recipe = await generateRecipeWithAI(ingredients, options);

        res.json({ recipe });

    } catch (error) {
        console.error("Error generating recipe:", error);
        res.status(500).json({ 
            error: "Error al generar receta con IA",
            details: error.message 
        });
    }
};












/* export const generateRecipe = async (req, res) => {
    try {
        const { ingredients, options } = req.body

        if (!ingredients || ingredients.length === 0) {
            return res.status(400).json({ error: "Se requieren ingredientes" })
        }
        const mockRecipe = {
            title: `Receta con ${ingredients.join(", ")}`,
            time: "30 minutos",
            difficulty: "Fácil",
            ingredients: ingredients.map((ing) => `200g de ${ing}`),
            steps: [
                "Preparar los ingredientes",
                "Cocinar según preferencia",
                "Servir caliente",
            ],
        }

        res.json({ recipe: mockRecipe })
    } catch (error) {
        console.error("Error generating recipe:", error)
        res.status(500).json({ error: "Error interno del servidor" })
    }
}
 */