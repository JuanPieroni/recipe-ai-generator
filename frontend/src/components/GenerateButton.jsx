import { Flame } from "lucide-react"
import styles from "../styles/GenerateButton.module.css"

const GenerateButton = ({ ingredients, onGenerateRecipe }) => {
    const handleGenerateRecipe = () => {
        if (ingredients.length > 0) {
            onGenerateRecipe(ingredients)
        }
    }

    return (
        <button
            onClick={handleGenerateRecipe}
            disabled={ingredients.length === 0}
            className={styles.generateButton}
        >
            <Flame className={styles.generateIcon} />
            Generar Receta
        </button>
    )
}

export default GenerateButton