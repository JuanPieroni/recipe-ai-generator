import { useState } from "react"
import { Plus, X, Carrot } from "lucide-react"
import styles from "../styles/IngredientForm.module.css"

const IngredientForm = ({ ingredients, setIngredients }) => {
    const [currentInput, setCurrentInput] = useState("")

    const handleAddIngredient = () => {
        if (currentInput.trim() !== "") {
            setIngredients([...ingredients, currentInput.trim()])
            setCurrentInput("")
        }
    }

    const handleRemoveIngredient = (indexToRemove) => {
        setIngredients(
            ingredients.filter((_, index) => index !== indexToRemove),
        )
    }

    return (
        <div className={styles.ingredientForm}>
            <h2 className={styles.title}>
                <Carrot className={styles.titleIcon} />
                ¿Qué ingredientes tienes?
            </h2>

            <div className={styles.inputGroup}>
                <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddIngredient()
                        }
                    }}
                    placeholder="Ej: pollo, arroz, tomate"
                    className={styles.input}
                />

                <button
                    onClick={handleAddIngredient}
                    className={styles.addButton}
                >
                    <Plus size={20} />
                    Agregar
                </button>
            </div>

            <div className={styles.counter}>
                Ingredientes:{" "}
                <span className={styles.counterBadge}>
                    {ingredients.length}
                </span>
            </div>

            {ingredients.length === 0 ? (
                <div className={styles.emptyMessage}>
                    ⬆️ Agrega al menos un ingrediente para generar una receta
                </div>
            ) : (
                <ul className={styles.ingredientsList}>
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className={styles.ingredientChip}>
                            <span className={styles.ingredientName}>
                                <Carrot className={styles.ingredientIcon} />
                                {ingredient}
                            </span>
                            <button
                                onClick={() => handleRemoveIngredient(index)}
                                className={styles.removeButton}
                                aria-label={`Eliminar ${ingredient}`}
                            >
                                <X size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}


        </div>
    )
}

export default IngredientForm
