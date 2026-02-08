import { useState } from "react"
import { Link } from "react-router-dom"
import { ChefHat, Menu, X } from "lucide-react"
import styles from "../styles/Header.module.css"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo}>
                    <ChefHat className={styles.logoIcon} />
                    <span>Recipe AI</span>
                </Link>

                <button
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul
                    className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}
                >
                    <li>
                        <Link
                            to="/"
                            className={styles.navLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/generator"
                            className={styles.navLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Generator
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/favorites"
                            className={styles.navLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Favoritos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className={styles.navLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className={styles.navLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
