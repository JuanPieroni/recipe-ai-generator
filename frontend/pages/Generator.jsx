import { useState } from "react"
import { CookingPot } from "lucide-react"
import IngredientForm from "../src/components/IngredientForm"
import RecipeOptions from "../src/components/RecipeOptions"
import RecipeDisplay from "../src/components/RecipeDisplay"
import { generateRecipeFromAPI } from "../services/front.recipe.service.js"
import styles from "../src/styles/Generator.module.css"

const Generator = () => {
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState({
        cuisine: "casera",
        servings: 2,
        time: "medio",
    })

    const handleGenerateRecipe = async (ingredients) => {
        console.log("Ingredientes recibidos:", ingredients)
        console.log("Opciones:", options)

        setLoading(true)
        setRecipe(null)

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
        <div className={styles.generator}>
            <h1 className={styles.pageTitle}>
                <CookingPot className={styles.titleIcon} />
                Recipe AI Generator
            </h1>

            <div className={styles.content}>
                <div className={styles.formSection}>
                    <IngredientForm onGenerateRecipe={handleGenerateRecipe} />
                    <RecipeOptions onOptionsChange={setOptions} />
                </div>

                {loading && (
                    <div className={styles.loadingState}>
                        <div className={styles.spinner}></div>
                        <p className={styles.loadingText}>
                            Generando tu receta... 🍳⏳
                        </p>
                    </div>
                )}

                {!loading && recipe && (
                    <div className={styles.resultSection}>
                        <RecipeDisplay recipe={recipe} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Generator
