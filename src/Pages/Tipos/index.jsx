import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header/index.jsx";
import Footer from "../../Components/Footer/index.jsx";
import "./style.css";

function Tipos() {
  const [receitas, setReceitas] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');

  const handleChange = (event) => {
    setTipoSelecionado(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/receitas")
      .then((response) => {
        setReceitas(response.data);
      })
      .catch(() => console.log("Erro na requisição!"));
  }, []);

  const tiposFiltrados = receitas
    .map(receita => receita.tipo)
    .filter((tipo, index, self) => self.indexOf(tipo) === index);

  const receitasFiltradas = tipoSelecionado
    ? receitas.filter(receita => receita.tipo === tipoSelecionado)
    : receitas;

  return (
    <div>
      <main>
        <div className="container">
          <Header />
          <div className="seletor">
            <h1 className="titulo">Selecione o tipo de receita:</h1>
            <select className="form-select" onChange={handleChange}>
              <option value="">Selecione uma opção</option>
              {tiposFiltrados.map((tipo, index) => (
                <option key={index} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>
          <div className="cards">
            {receitasFiltradas.map((receita, key) => (
              <div
                className="card"
                key={key}
                style={{ backgroundImage: `url(${receita.urlImagem})` }}
              >
                <header className="card_titulo">
                  <h3>{receita.nome}</h3>
                </header>
                <footer className="card_rodape">
                  <div className="card_rodape_botoes">
                    <div className="editar">
                      <Link to={`/update/${receita.id}`}>
                        <button className="editar">
                          <img src="src/assets/editar.png" alt="Editar" />
                        </button>
                      </Link>
                    </div>
                    <div className="deletar">
                      <Link to={"/lista"}>
                        <button className="deletar" onClick={() => deleteReceita(receita.id)}>
                          <img src="src/assets/deletar.png" alt="Deletar" />
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Link to={`/receitas/${receita.id}`}>
                    <p>Ver receita</p>
                  </Link>
                </footer>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Tipos;
