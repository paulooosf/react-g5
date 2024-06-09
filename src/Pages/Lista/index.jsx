import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/index.jsx";
import Footer from "../../Components/Footer/index.jsx";
import DarkMode from "../../Components/DarkMode/index.jsx";


const colors = ["rgba(234, 226, 183, 1)", "rgba(52, 50, 40, 1)"];

function Lista() {
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
                <div className="DarkMode">
                    <button onClick={click}>
                        <DarkMode/>
                    </button>
                </div>
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
                        <Footer/>
                </div>
            </main>
        </div>
    );
}

export default Lista;