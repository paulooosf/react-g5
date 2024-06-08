import React from "react";
import { Routes, Route } from "react-router-dom";
import Início from "../Pages/Início/index.jsx";
import Lista from "../Pages/Lista/index.jsx";
import Tipos from "../Pages/Tipos/index.jsx";
import Inserir from "../Pages/Inserir/index.jsx";


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element = {<Início />}></Route>
            <Route path="/Lista" element = {<Lista />}></Route>
            <Route path="/Tipos" element = {<Tipos />}></Route>
            <Route path="/Inserir" element = {<Inserir /> } ></Route>
        </Routes>
    );
}

export default AppRouter;