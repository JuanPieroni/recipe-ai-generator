import { useState } from "react"
import "./App.css"
import IngredientForm from "./components/IngredientForm"
import RecipeDisplay from "./components/RecipeDisplay"
import { mockRecipe } from "./mocks/recipeData"
import RecipeOptions from "./components/RecipeOptions"

function App() {
    //guarda receta actual
    const [recipe, setRecipe] = useState(null)
    // se ejecuta cuando se genere la receta
    const handleGenerateRecipe = (ingredients) => {
        // logica para generar receta
        console.log("Ingredientes recibidos:", ingredients)
        setRecipe(mockRecipe)
    }

    return (
        <>
            <div>
                <h1>Recipe AI Generator</h1>
                <IngredientForm onGenerateRecipe={handleGenerateRecipe} />
                <RecipeOptions />
                <RecipeDisplay recipe={recipe} />
            </div>
        </>
    )
}

export default App
