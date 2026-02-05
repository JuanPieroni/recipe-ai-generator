

const RecipeDisplay = ({ recipe }) => {

  if (!recipe) {
    return null
  }
  return (
    <>
      <div>
        <h2>{recipe.title}</h2>

        <p>⏱️ Tiempo: {recipe.time}</p>
        <p>📊 Dificultad: {recipe.difficulty}</p>

        <h3>Ingredientes:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Pasos:</h3>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default RecipeDisplay
