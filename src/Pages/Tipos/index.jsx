import React from "react";
import "./style.css";
import Footer from "../../Components/Footer/index.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header/index.jsx";

function Tipos() {
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

  return (
    <div>
      <main>
        <div className="container">
          <Header />
          <h1 className="titulo">Selecione o tipo de receita:</h1>
          <select className="form-select">
            <option selected>Selecione uma opção</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="cards">
            {receitas.map((receitas, key) => {
              return (
                <div
                  className="card"
                  key={key}
                  style={{ backgroundImage: `url(${receitas.urlImagem})` }}
                >
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

export default Tipos;
