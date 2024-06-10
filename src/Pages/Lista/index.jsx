import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/index.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/index.jsx";
import DarkMode from "../../Components/DarkMode/index.jsx";

const colors = ["rgba(234, 226, 183, 1)", "rgba(52, 50, 40, 1)"];

function Lista() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/receitas")
      .then((response) => {
        setReceitas(response.data);
        console.log(response.data);
      })
      .catch(() => console.log("Erro na requisição!"));
  }, []);

  const [position, setPosition] = useState(0);
  const [cor, setCor] = useState(colors[position]);

  const click = () => {
    setPosition(position === colors.length - 1 ? 0 : position + 1);
  };

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
          {receitas.map((receitas, key) => {
            return (
              <div className="card" key={key} style={{ backgroundImage: `url(${receitas.urlImagem})` }}>
                <header className="card_titulo">
                  <h3>{receitas.nome}</h3>
                </header>
                <footer className="card_rodape">
                  <div className="card_rodape_editar">
                    <button className="editar">
                      <img src="src\assets\editar.png" alt="" />
                    </button>
                    <button className="deletar">
                      <img src="src\assets\deletar.png" alt="" />
                    </button>
                  </div>
                  <Link to={`/receitas/${receitas.id}`}>
                    <p>Ver receita</p>
                  </Link>
                </footer>
              </div>
            );
          })}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Lista;
