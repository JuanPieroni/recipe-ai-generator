import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/generator">Generator</Link>
                    <Link to="/favorites">Favoritos</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header>
        </>
    )
}

export default Header
