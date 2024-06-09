import React from "react";
import Header from "../../Header/index.jsx";
import "./style.css";
import DarkMode from "../../Components/DarkMode/index.jsx";


function Inserir() {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                        <DarkMode/>
                    </div>
            </main>
        </div>
    );
}

export default Inserir;
