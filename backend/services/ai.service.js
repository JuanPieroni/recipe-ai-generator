import { generateRecipeWithAI as generateWithOpenAI } from './openai.service.js';
import { generateRecipeWithGemini } from './gemini.service.js';
import { config } from '../config/env.js';

export const generateRecipeWithAI = async (ingredients, options) => {
    // Elegir qué IA usar según la variable de entorno
    if (config.aiProvider === 'gemini') {
        return await generateRecipeWithGemini(ingredients, options);
    } else if (config.aiProvider === 'openai') {
        return await generateWithOpenAI(ingredients, options);
    } else {
        throw new Error('Proveedor de IA no válido');
    }
};
