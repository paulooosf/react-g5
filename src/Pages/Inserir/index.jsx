import React from "react";
import Header from "../../Header/index.jsx";
import "./style.css";
import DarkMode from "../../Components/DarkMode/index.jsx";
import Footer from "../../Footer/index.jsx";


function Inserir() {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                        <DarkMode/>
                    </div>
            </main>
            <Footer />
        </div>
    );
}

export default Inserir;
