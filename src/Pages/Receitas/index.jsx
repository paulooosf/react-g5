import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header';
import axios from 'axios';
import "./style.css";
import { useParams } from "react-router-dom";
import Footer from '../../Components/Footer';
import { Link } from "react-router-dom";


function Receitas() {
  const [ler, setLer] = useState({});
  const { id } = useParams();

  useEffect(() => {
  axios
  .get(`http://localhost:8080/receitas/${id}`)
  .then((response) => {
    setLer(response.data);
    console.log(ler.nome);
  })
  .catch(() => console.log("Erro na requisição!"));
}, []);

return (
<div>
  <Header />
  <main>
    <div className="cards">
      <div className="card-post">
        <header>
          <h2>{ler.nome}</h2>
          <hr />
          <img src={ler.urlImagem} alt="imagem" className='imagem'/>
        </header>
        <div className="line" />
        <ul>
          <h3>Ingredientes:</h3>
          <p>{ler.ingredientes}</p>
          <h3>Modo de Preparo:</h3>
          <p>{ler.preparo}</p>
        </ul>
        <div className="btn-post">
        <Link to={`/lista`}>
          <button type='submit'>Voltar</button>
        </Link>
        </div>
      </div>
    </div>
    <Footer/>
  </main>
</div>
);
}

export default Receitas;