
import "./App.css"

import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "../pages/Home"
import Generator from "../pages/Generator"
import Favorites from "../pages/Favorites"
import Profile from "../pages/Profile"
import Login from "../pages/Login"


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generator" element={<Generator />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App
