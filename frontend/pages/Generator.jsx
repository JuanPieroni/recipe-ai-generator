import { useState } from "react"
import IngredientForm from "../src/components/IngredientForm"
import RecipeOptions from "../src/components/RecipeOptions"
import RecipeDisplay from "../src/components/RecipeDisplay"
import { generateRecipeFromAPI } from "../services/front.recipe.service.js"
// import {mockRecipe} from '../src/mocks/recipeData.js'



const Generator = () => {
    //guarda receta actual
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState({
        cuisine: "casera",
        servings: 2,
        time: "medio",
    })
    // se ejecuta cuando se genere la receta
    const handleGenerateRecipe = async (ingredients) => {
        // logica para generar receta
        console.log("Ingredientes recibidos:", ingredients)
        console.log("Opciones:", options)

        //simula carga
        setLoading(true)
        setRecipe(null) // limpia la previa

        // Simular llamada API
        // setTimeout(() => {
        //     setRecipe(mockRecipe)
        //     setLoading(false)
        // }, 1500)

        //Llamada real al backend
        try {
            const generatedRecipe = await generateRecipeFromAPI(
                ingredients,
                options,
            )
            setRecipe(generatedRecipe)
        } catch (error) {
            console.error("Error al generar la receta:", error)
            alert("Error al generar la receta. Inténtalo de nuevo.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div>
                <h1>Recipe AI Generator</h1>
                <IngredientForm onGenerateRecipe={handleGenerateRecipe} />
                <RecipeOptions onOptionsChange={setOptions} />

                {loading && (
                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <p>Generando tu receta... 🍳⏳</p>
                    </div>
                )}
                {!loading && <RecipeDisplay recipe={recipe} />}
            </div>
        </>
    )
}

export default Generator
