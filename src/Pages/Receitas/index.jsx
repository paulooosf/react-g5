import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header';
import axios from 'axios';
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import Footer from '../../Components/Footer';


function Receitas() {
  const [ler, setLer] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
  axios
  .get(`http://localhost:8080/receitas/${id}`)
  .then((response) => {
    setLer(response.data);
    console.log(ler.nome);
  })
  .catch(() => console.log("Erro na requisição!"));
}, []);

const voltar = () => {
  navigate(-1);
}

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
          <div className="ingredientes">
            <div>
              {ler.ingredientes && ler.ingredientes.split(',').map((ingrediente, index) => (
                    <li key={index}>{ingrediente.trim()}</li>
                  ))}
            </div>
          </div>
          <h3>Modo de Preparo:</h3>
          <p>{ler.preparo}</p>
        </ul>
        <div className="btn-post">
          <button type='submit' onClick={voltar}>VOLTAR</button>
        </div>
      </div>
    </div>
    <Footer/>
  </main>
</div>
);
}

export default Receitas;