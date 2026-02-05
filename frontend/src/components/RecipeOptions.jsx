import { useState } from "react"

const RecipeOptions = () => {
  const [ cuisine, setCuisine ] = useState("casera")
  const [ servings, setServings ] = useState(2)
  const [ time, setTime ] = useState("medio")

  return (
    <>
      <div>
        <h3>Opciones de la Receta</h3>
        {/* tipo de cocina  */}
        <label>
          Tipo de Cocina:
          <select
            name="cuisine"
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="casera">Casera</option>
            <option value="italiana">Italiana</option>
            <option value="mexicana">Mexicana</option>
            <option value="oriental">Oriental</option>
            <option value="mediterranea">Mediterranea</option>
            <option value="caribeña">Caribeña</option>
            <option value="latina">Latina</option>
          </select>
        </label>

        <label>
          Para cuantas personas:
          <select
            name="servings"
            id="servings"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </label>

        <label>
          Tiempo Disponible:
          <select
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="express">Express (Menos de 15 min.)</option>
            <option value="rapido" >Rápido(Menos de 30 min.)</option>
            <option value="medio" >Medio(30-60 min.)</option>
            <option value="lento" >Lento(Mas de 60 min.)</option>

          </select>
        </label>
      </div>
    </>
  )
}

export default RecipeOptions
