import { useState } from "react"
import { CookingPot, Brain, Sparkles } from "lucide-react"
import IngredientForm from "../src/components/IngredientForm"
import RecipeOptions from "../src/components/RecipeOptions"
import GenerateButton from "../src/components/GenerateButton"
import RecipeDisplay from "../src/components/RecipeDisplay"
import { generateRecipeFromAPI } from "../services/front.recipe.service.js"
import styles from "../src/styles/Generator.module.css"

const Generator = () => {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState({
        cuisine: "casera",
        servings: 2,
        time: "medio",
        variation: false,
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

    const handleTryAnother = async () => {
        console.log("Generando variación de receta...")
        setLoading(true)
        setRecipe(null)

        try {
            const generatedRecipe = await generateRecipeFromAPI(
                ingredients,
                { ...options, variation: true }
            )
            setRecipe(generatedRecipe)
        } catch (error) {
            console.error("Error al generar variación:", error)
            alert("Error al generar otra receta. Inténtalo de nuevo.")
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
                    <IngredientForm
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                    />
                    <RecipeOptions onOptionsChange={setOptions} />
                    <GenerateButton
                        ingredients={ingredients}
                        onGenerateRecipe={handleGenerateRecipe}
                    />
                </div>

                {loading && (
                    <div className={styles.loadingState}>
                        <div className={styles.spinnerContainer}>
                            <Brain className={styles.brainIcon} />
                            <Sparkles className={styles.sparkle1} />
                            <Sparkles className={styles.sparkle2} />
                            <Sparkles className={styles.sparkle3} />
                        </div>
                        <p className={styles.loadingText}>
                            Pensando la receta perfecta...
                        </p>
                        <p className={styles.loadingSubtext}>
                            La IA está procesando tus ingredientes 🧠✨
                        </p>
                    </div>
                )}

                {!loading && recipe && (
                    <div className={styles.resultSection}>
                        <RecipeDisplay 
                            recipe={recipe} 
                            onTryAnother={handleTryAnother}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Generator
