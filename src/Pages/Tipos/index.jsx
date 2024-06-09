import React from "react";
import Header from "../../Components/Header/index.jsx";
import "./style.css";
import Footer from "../../Components/Footer/index.jsx";
import DarkMode from "../../Components/DarkMode/index.jsx";
import { useState, useEffect } from "react";


const colors = ["rgba(234, 226, 183, 1)", "rgba(52, 50, 40, 1)"];

function Tipos() {
    const [position, setPosition] = useState(0)
    const [cor, setCor] = useState(colors[position])

    const click = () => {
        setPosition(position === colors.length - 1 ? 0 : position + 1);
    }

    useEffect(() => {
        setCor(colors[position]);
    }, [position]);

    return (
        <div style={{ backgroundColor: cor }}>
            <main>
                <div className="container">
                <div className="mainStyle"> 
                <Header/>
                </div>
                <button className = 'DarkMode' onClick={click}>
                        <DarkMode/>
                    </button> 
                    <div className="cards">
                        <div className="card">
                            <header className="card_titulo">
                                <h3>Pizza de 4 queijos</h3>
                            </header>
                            <footer className="card_rodape">
                                <div className="card_rodape_editar">
                                    <button className="editar"><img src="src\assets\editar.png" alt=""/></button>
                                    <button className="deletar"><img src="src\assets\deletar.png" alt=""/></button>
                                </div>
                                <button className="ver_receita">Ver receita</button>
                            </footer>
                        </div>
                </div>  
                <Footer />
                </div>
            </main>
        </div>
    );
}

export default Tipos;
