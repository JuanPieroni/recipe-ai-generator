export const recipeStorage = {
    getAll: () => {
        const saved = localStorage.getItem("savedRecipes")
        return saved ? JSON.parse(saved) : []
    },

    save: (recipe) => {
        const saved = recipeStorage.getAll()
        const newRecipe = {
            id: Date.now(),
            ...recipe,
            savedAt: new Date().toLocaleDateString("es-AR"),
        }
        saved.push(newRecipe)
        localStorage.setItem("savedRecipes", JSON.stringify(saved))
        return newRecipe
    },

    delete: (id) => {
        const saved = recipeStorage.getAll()
        const filtered = saved.filter((r) => r.id !== id)
        localStorage.setItem("savedRecipes", JSON.stringify(filtered))
    },

    // Compartir receta como texto
    shareAsText: (recipe) => {
        return `
🍳 ${recipe.title}

⏱️ Tiempo: ${recipe.time}
📊 Dificultad: ${recipe.difficulty}

📝 Ingredientes:
${recipe.ingredients.map((ing) => `• ${ing}`).join("\n")}

👨‍🍳 Pasos:
${recipe.steps.map((step, i) => `${i + 1}. ${step}`).join("\n")}

Generado con Recipe AI Generator 🤖
    `.trim()
    },
}
