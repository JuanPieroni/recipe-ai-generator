import { useState, useEffect } from 'react'
import { Trash2, ChefHat } from 'lucide-react'
import { recipeStorage } from '../src/services/recipeStorage'
import styles from '../src/styles/Favorites.module.css'

const Favorites = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        setRecipes(recipeStorage.getAll())
    }, [])

    const handleDelete = (id) => {
        recipeStorage.delete(id)
        setRecipes(recipeStorage.getAll())
    }

    if (recipes.length === 0) {
        return (
            <div className={styles.empty}>
                <ChefHat size={48} />
                <h2>No hay recetas guardadas</h2>
                <p>¡Genera una receta y guárdala para verla aquí!</p>
            </div>
        )
    }

    return (
        <div className={styles.favorites}>
            <h1 className={styles.title}>Mis Recetas Guardadas</h1>
            <div className={styles.grid}>
                {recipes.map(recipe => (
                    <div key={recipe.id} className={styles.card}>
                        <h3>{recipe.title}</h3>
                        <p className={styles.meta}>⏱️ {recipe.time} | 📊 {recipe.difficulty}</p>
                        <p className={styles.date}>Guardada: {recipe.savedAt}</p>
                        <button
                            onClick={() => handleDelete(recipe.id)}
                            className={styles.deleteBtn}
                        >
                            <Trash2 size={18} />
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorites
