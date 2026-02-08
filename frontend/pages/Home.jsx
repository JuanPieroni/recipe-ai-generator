import { Link } from "react-router-dom"
import { ChefHat, Flame } from "lucide-react"
import styles from "../src/styles/Home.module.css"

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.hero}>
                <h1 className={styles.title}>
                    <ChefHat className={styles.titleIcon} />
                    RECIPE AI GENERATOR
                </h1>
                <p className={styles.subtitle}>
                    Genera recetas personalizadas solo con los ingredientes que
                    dispongas!
                </p>
            </div>

            <div className={styles.features}>
                <h2 className={styles.featuresTitle}>¿Cómo funciona?</h2>
                <ol className={styles.featuresList}>
                    <li className={styles.featureItem}>
                        <div className={styles.featureNumber}>1</div>
                        <p className={styles.featureText}>
                            Ingresa los ingredientes que tienes disponibles en tu
                            heladera o alacena
                        </p>
                    </li>
                    <li className={styles.featureItem}>
                        <div className={styles.featureNumber}>2</div>
                        <p className={styles.featureText}>
                            El sistema procesará tu solicitud y generará una receta
                            personalizada utilizando inteligencia artificial.
                        </p>
                    </li>
                    <li className={styles.featureItem}>
                        <div className={styles.featureNumber}>3</div>
                        <p className={styles.featureText}>
                            Recibirás una receta detallada con los pasos para
                            preparar un plato delicioso utilizando los ingredientes
                            que tienes a mano.
                        </p>
                    </li>
                </ol>
            </div>

            <div className={styles.cta}>
                <Link to="/generator" className={styles.ctaButton}>
                    <Flame className={styles.ctaIcon} />
                    Empezá a cocinar
                </Link>
            </div>
        </div>
    )
}

export default Home
