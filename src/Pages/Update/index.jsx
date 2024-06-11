import React from 'react'
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../../Components/Header';
import Footer from "../../Components/Footer/index.jsx";


const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("Nome Obrigatório")
    .max(40, "precisa ter 40 caracteres no máximo !"),
    urlImagem: yup
    .string()
    .required("Link Obrigatório")
    .max(800, "precisa ter 800 caracteres no máximo !"),
  ingredientes: yup
    .string()
    .required("Ingredientes Obrigatório")
    .max(400, "precisa ter 400 caracteres no máximo !"),
  preparo: yup
    .string()
    .required("Conteúdo Obrigatório")
    .max(500, "precisa ter 500 caracteres no máximo !"),
  
});



function Update() {
  const {id} = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/receitas/${id}`)
      .then((response) => {
        reset(response.data)
      })
      .catch(() => console.log("Erro na requisição!"));
  }, []);



  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios
      .put(`http://localhost:8080/receitas/${id}`, data)
      .then(() => {
        console.log("Deu tudo certo");
        navigate("/");
      })
      .catch(() => console.log("Problemas na requisição"));
  return (
    <div>
      <Header />
      <main>
        <div className="card-post">
          <h1>Editar Receita</h1>
          <hr />
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" {...register("nome")} />
              <p className="error-message">{errors.nome?.message}</p>

              <label htmlFor="urlImagem">Link da imagem</label>
              <input type="text" id="urlImagem" {...register("urlImagem")} />
              <p className="error-message">{errors.urlImagem?.message}</p>

              <label htmlFor="ingredientes">Ingredientes</label>
              <input type="text" id="ingredientes" {...register("ingredientes")} />
              <p className="error-message">{errors.ingredientes?.message}</p>

              <label htmlFor="preparo">Modo de Preparo</label>
              <textarea
                id="preparo"
                rows="10"
                cols="30"
                type="text"
                {...register("preparo")}
              />
              <p className="error-message">{errors.preparo?.message}</p>

              <div className="btn-post">
                <button>Enviar</button>
              </div>
            </div>
          </form>
        </div>
        <Footer/>
      </main>
    </div>
  );

}

export default Update