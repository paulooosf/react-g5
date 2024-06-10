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
  .get(`https://6662524362966e20ef083a71.mockapi.io/receitas/${id}`)
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
      <div className="card">
        <header>
          <h2>{ler.nome}</h2>
        </header>
        <div className="line" />
        <p>{ler.ingredientes}</p>
      </div>
      <div className="line">
      <p>{ler.modoDePreparo}</p>
      </div>
    </div>
  </main>
</div>
);
}

export default Receitas;