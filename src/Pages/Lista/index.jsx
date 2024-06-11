import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/index.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/index.jsx";

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

  function deleteReceita(id) {
    axios.delete(`http://localhost:8080/receitas/${id}`)
    setReceitas(receitas.filter((receitas) => receitas.id != id));
  }

  return (
    <div>
      <main>
        <div className="container">
          <Header />
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
                    <div className="card_rodape_botoes">
                      <div className="editar">
                        <Link to={`/update/${receitas.id}`}>
                        <button className="editar">
                          <img src="src\assets\editar.png" alt="" />
                        </button>
                        </Link>
                      </div>
                      <div className="deletar">
                        <Link to={"/lista"}>
                          <button className="deletar" onClick={() => deleteReceita(receitas.id)}>
                            <img src="src\assets\deletar.png" alt="" />
                          </button>
                        </Link>
                      </div>
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
