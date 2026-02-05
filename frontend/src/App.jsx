import { useState } from "react"
import "./App.css"
import IngredientForm from "./components/IngredientForm"
import RecipeDisplay from "./components/RecipeDisplay"
import { mockRecipe } from "./mocks/recipeData"
import RecipeOptions from "./components/RecipeOptions"

function App() {
    //guarda receta actual
    const [ recipe, setRecipe ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ options, setOptions ] = useState({
        cuisine: "casera",
        servings: 2,
        time: "medio",
    })
    // se ejecuta cuando se genere la receta
    const handleGenerateRecipe = (ingredients) => {
        // logica para generar receta
        console.log("Ingredientes recibidos:", ingredients)
        console.log("Opciones:", options)

        //simula carga
        setLoading(true)
        setRecipe(null) // limpia la previa

        // Simular llamada API
        setTimeout(() => {
            setRecipe(mockRecipe)
            setLoading(false)
        }, 1500)
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

export default App
