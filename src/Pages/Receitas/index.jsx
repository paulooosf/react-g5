import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header';
import axios from 'axios';
import "./style.css";
import { useParams } from "react-router-dom";


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
        </header>
        <div className="line" />
        <ul>
          <li>{ler.ingredientes}</li>
          <li>{ler.preparo}</li>
        </ul>
      </div>
    </div>
  </main>
</div>
);
}

export default Receitas;