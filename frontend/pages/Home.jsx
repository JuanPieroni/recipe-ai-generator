import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div>
                <h1>RECIPE AIs GENERATOR</h1>
                <p>
                    Genera recetas personalizadas solo con los ingredientes que
                    dispongas!
                </p>
                <h2>Como funciona?</h2>
                <ol>
                    <li>
                        Ingresa los ingredientes que tienes disponibles en tu
                        heladera o alacena
                    </li>
                    <li>
                        El sistema procesará tu solicitud y generará una receta
                        personalizada utilizando inteligencia artificial.
                    </li>
                    <li>
                        Recibirás una receta detallada con los pasos para
                        preparar un plato delicioso utilizando los ingredientes
                        que tienes a mano.
                    </li>
                </ol>

                <Link to="/generator">
                    <button>Empeza a cocinar</button>
                </Link>
            </div>
        </>
    )
}

export default Home