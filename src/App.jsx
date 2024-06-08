import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes/AppRouter.jsx";
import "./Styles/global.css";

function App() {
return (
    <div>
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
    </div>
);
}

export default App;