import { useState } from "react"
import { Settings, Globe, Users, Clock } from "lucide-react"
import styles from "../styles/RecipeOptions.module.css"

const RecipeOptions = ({ onOptionsChange }) => {
    const [cuisine, setCuisine] = useState("casera")
    const [servings, setServings] = useState(2)
    const [time, setTime] = useState("medio")

    const handleOptionChange = (field, value) => {
        const newOptions = {
            cuisine: field === "cuisine" ? value : cuisine,
            servings: field === "servings" ? value : servings,
            time: field === "time" ? value : time,
        }
        onOptionsChange(newOptions)
    }

    return (
        <div className={styles.recipeOptions}>
            <h3 className={styles.title}>
                <Settings className={styles.titleIcon} />
                Opciones de la Receta
            </h3>

            <div className={styles.optionsGrid}>
                <div className={styles.optionField}>
                    <label className={styles.label} htmlFor="cuisine">
                        <Globe className={styles.labelIcon} />
                        Tipo de Cocina:
                    </label>
                    <select
                        id="cuisine"
                        name="cuisine"
                        value={cuisine}
                        onChange={(e) => {
                            setCuisine(e.target.value)
                            handleOptionChange("cuisine", e.target.value)
                        }}
                        className={styles.select}
                    >
                        <option value="casera">Casera</option>
                        <option value="italiana">Italiana</option>
                        <option value="mexicana">Mexicana</option>
                        <option value="oriental">Oriental</option>
                        <option value="mediterranea">Mediterránea</option>
                        <option value="caribeña">Caribeña</option>
                        <option value="latina">Latina</option>
                    </select>
                </div>

                <div className={styles.optionField}>
                    <label className={styles.label} htmlFor="servings">
                        <Users className={styles.labelIcon} />
                        Para cuántas personas:
                    </label>
                    <select
                        id="servings"
                        name="servings"
                        value={servings}
                        onChange={(e) => {
                            const value = Number(e.target.value)
                            setServings(value)
                            handleOptionChange("servings", value)
                        }}
                        className={styles.select}
                    >
                        <option value={1}>1 persona</option>
                        <option value={2}>2 personas</option>
                        <option value={3}>3 personas</option>
                        <option value={4}>4 personas</option>
                        <option value={5}>5 personas</option>
                        <option value={6}>6 personas</option>
                    </select>
                </div>

                <div className={styles.optionField}>
                    <label className={styles.label} htmlFor="time">
                        <Clock className={styles.labelIcon} />
                        Tiempo Disponible:
                    </label>
                    <select
                        id="time"
                        name="time"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                            handleOptionChange("time", e.target.value)
                        }}
                        className={styles.select}
                    >
                        <option value="express">
                            Express (Menos de 15 min.)
                        </option>
                        <option value="rapido">
                            Rápido (Menos de 30 min.)
                        </option>
                        <option value="medio">Medio (30-60 min.)</option>
                        <option value="lento">Lento (Más de 60 min.)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default RecipeOptions
