import React from "react";
import "./style.css";
import Footer from "../../Components/Footer/index.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header/index.jsx";

function Tipos() {
  const [receitas, setReceitas] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [filtro, setFiltro] = useState('');

  const handleChange = (event) => {
    setTipoSelecionado(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/receitas")
      .then((response) => {
        setReceitas(response.data);
        console.log(response.data);
      })
      .catch(() => console.log("Erro na requisição!"));
  }, []);

  const tiposFiltrados = receitas
    .map(receitas => receitas.tipo)
    .filter((tipo, index, self) => self.indexOf(tipo) === index)
    .filter(tipo => tipo.toLowerCase().includes(filtro.toLowerCase()));

  const receitasFiltradas = tipoSelecionado
    ? receitas.filter(receitas => receitas.tipo === tipoSelecionado)
    : receitas;

  return (
    <div>
      <main>
        <div className="container">
          <Header />
          <h1 className="titulo">Selecione o tipo de receita:</h1>
          <select className="form-select" onChange={handleChange}>
            <option value="" selected>Selecione uma opção</option>
            {tiposFiltrados.map((tipo, index) => (
              <option key={index} value={tipo}>{tipo}</option>
            ))}
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

export default Tipos;
