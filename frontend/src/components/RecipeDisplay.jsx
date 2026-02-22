import { useState } from "react"
import {
    Clock,
    ChefHat,
    CheckCircle,
    Bookmark,
    Share2,
    Shuffle,
} from "lucide-react"
import styles from "../styles/RecipeDisplay.module.css"
import { recipeStorage } from "../services/recipeStorage.js"

const RecipeDisplay = ({ recipe, onTryAnother }) => {
    const [saved, setSaved] = useState(false)

    if (!recipe) {
        return null
    }

    const handleSave = () => {
        recipeStorage.save(recipe)
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
    }

    const handleShare = async () => {
        const text = recipeStorage.shareAsText(recipe)

        // Intentar usar Web Share API (móvil)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: recipe.title,
                    text: text,
                })
            } catch (err) {
                console.log("Share cancelado")
            }
        } else {
            // Fallback: copiar al portapapeles
            navigator.clipboard.writeText(text)
            alert("Receta copiada al portapapeles!")
        }
    }

    return (
        <div className={styles.recipeCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>{recipe.title}</h2>

                <div className={styles.metadata}>
                    <div className={styles.metaItem}>
                        <Clock size={20} />
                        {recipe.time}
                    </div>
                    <div className={styles.metaItem}>
                        <ChefHat size={20} />
                        {recipe.difficulty}
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    <CheckCircle className={styles.sectionIcon} />
                    Ingredientes
                </h3>
                <ul className={styles.ingredientsList}>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className={styles.ingredientItem}>
                            <CheckCircle
                                className={styles.ingredientIcon}
                                size={20}
                            />
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    <ChefHat className={styles.sectionIcon} />
                    Pasos de Preparación
                </h3>
                <ol className={styles.stepsList}>
                    {recipe.steps.map((step, index) => (
                        <li key={index} className={styles.stepItem}>
                            {step}
                        </li>
                    ))}
                </ol>
            </div>

            <div className={styles.actions}>
                <button
                    onClick={handleSave}
                    className={`${styles.actionButton} ${styles.saveButton}`}
                    style={{ opacity: saved ? 0.7 : 1 }}
                >
                    <Bookmark size={20} />
                    {saved ? "✓ Guardada" : "Guardar Receta"}
                </button>
                <button
                    onClick={handleShare}
                    className={`${styles.actionButton} ${styles.shareButton}`}
                >
                    <Share2 size={20} />
                    Compartir
                </button>
                <button
                    onClick={onTryAnother}
                    className={`${styles.actionButton} ${styles.tryAnotherButton}`}
                >
                    <Shuffle size={20} />
                    ¿Otra receta?
                </button>
            </div>
        </div>
    )
}

export default RecipeDisplay
