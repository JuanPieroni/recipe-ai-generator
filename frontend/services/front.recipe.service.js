const API_URL = "http://localhost:8080/api/recipes"

export const generateRecipeFromAPI = async (ingredients, options) => {
    try {
        const response = await fetch(`${API_URL}/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients, options }),
        })

        if (!response.ok) {
            throw new Error("Error al generar la receta")
        }

        const data = await response.json()
        return data.recipe
    } catch (error) {
        console.error("Error:", error)
        throw error
    }
}
