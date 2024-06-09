import React from "react";
import Header from "../../Header/index.jsx";
import "./style.css";
import DarkMode from "../../Components/DarkMode/index.jsx";


function Lista() {
    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <DarkMode/>
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
                </div>
            </main>
        </div>
    );
}

export default Lista;
