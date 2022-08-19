import { Routes, Route } from "react-router-dom"
import { Personagem } from "../pages/Personagem"
import { Personagens } from "../pages/Personagens"

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Personagens/>}/>
            <Route path=":id" element={<Personagem/>}/>
        </Routes>
    )
}