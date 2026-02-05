import { useState } from "react"
const IngredientForm = ({ onGenerateRecipe }) => {
    const [ingredients, setIngredients] = useState([])
    const [currentInput, setCurrentInput] = useState("")

    // AGREGAR INGREDIENTE
    const handleAddIngedient = () => {
        if (currentInput.trim() !== "") {
            setIngredients([...ingredients, currentInput])
            setCurrentInput("")
        }
    }
    //ELIMINAR INGREDIENTE

    const handleRemoveIngredient = (indexToRemove) => {
        setIngredients(
            ingredients.filter((_, index) => index !== indexToRemove),
        )
    }

    //GENERAR RECETA
    const handleGenerateRecipe = () => {
        if (ingredients.length > 0) {
            onGenerateRecipe(ingredients)
        }
    }
    return (
        <>
            <div>
                <h2>Con que ingredientes quieres cocinar ?</h2>

                <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    placeholder="Ej: pollo, arroz, tomate"
                />

                <button onClick={handleAddIngedient}>Agregar</button>
                <p>Ingredientes: {ingredients.length}</p>

                {/* {Lista de Ingredientes} */}
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient}
                            <button
                                onClick={() => handleRemoveIngredient(index)}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={handleGenerateRecipe}> Generar Receta</button>
            </div>
        </>
    )
}

export default IngredientForm
