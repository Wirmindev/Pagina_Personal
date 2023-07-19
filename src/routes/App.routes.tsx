import { Route, Routes } from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Registro} from "../pages/Registro/Registro"
import {Clima} from "../pages/Clima/Clima"
import {Login} from "../pages/Login/Login"
import { ProtectedRoutes } from "./Protected.routes"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/clima" element={<Clima/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}