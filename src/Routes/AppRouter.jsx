import React from "react";
import { Routes, Route } from "react-router-dom";
import Início from "../Pages/Início/index.jsx";
import Lista from "../Pages/Lista/index.jsx";
import Tipos from "../Pages/Tipos/index.jsx";
import Inserir from "../Pages/Inserir/index.jsx";
import Receitas from "../Pages/Receitas/index.jsx";
import Update from "../Pages/Update/index.jsx";


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element = {<Início />}></Route>
            <Route path="/Lista" element = {<Lista />}></Route>
            <Route path="/Tipos" element = {<Tipos />}></Route>
            <Route path="/Inserir" element = {<Inserir /> } ></Route>
            <Route path="/receitas/:id" element= {<Receitas/>}></Route>
            <Route path="/update/:id" element= {<Update/>}></Route>
        </Routes>
    );
}

export default AppRouter;