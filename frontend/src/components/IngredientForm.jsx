import { useState } from "react"

const IngredientForm = ({ onGenerateRecipe }) => {
    const [ingredients, setIngredients] = useState([])
    const [currentInput, setCurrentInput] = useState("")

    const handleAddIngredient = () => {
        if (currentInput.trim() !== "") {
            setIngredients([...ingredients, currentInput])
            setCurrentInput("")
        }
    }

    const handleRemoveIngredient = (indexToRemove) => {
        setIngredients(ingredients.filter((_, index) => index !== indexToRemove))
    }

    const handleGenerateRecipe = () => {
        if (ingredients.length > 0) {
            onGenerateRecipe(ingredients)
        }
    }

    return (
        <div>
            <h2>¿Qué ingredientes tienes?</h2>
            
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
            />
            
            <button onClick={handleAddIngredient}>Agregar</button>
            
            <p>Ingredientes: {ingredients.length}</p>
            
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button onClick={() => handleRemoveIngredient(index)}>X</button>
                    </li>
                ))}
            </ul>

            {/* Mensaje si no hay ingredientes */}
            {ingredients.length === 0 && (
                <p style={{color: "gray", fontSize: "14px"}}>
                    ⬆️ Agrega al menos un ingrediente para generar una receta
                </p>
            )}

            {/* Botón deshabilitado si no hay ingredientes */}
            <button 
                onClick={handleGenerateRecipe}
                disabled={ingredients.length === 0}
                style={{
                    opacity: ingredients.length === 0 ? 0.5 : 1,
                    cursor: ingredients.length === 0 ? "not-allowed" : "pointer"
                }}
            >
                🔥 Generar Receta
            </button>
        </div>
    )
}

export default IngredientForm
