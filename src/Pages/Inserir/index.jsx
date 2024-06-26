import React from "react";
import Header from "../../Components/Header/index.jsx";
import "./style.css";
import Footer from "../../Components/Footer/index.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Inserir() {
    let navigate = useNavigate(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   const addPost = (data) => {
//     console.log(data);
//   };

const addPost = (data) =>
    axios
      .post("http://localhost:8080/receitas", data)
      .then(() => {
        console.log("Deu tudo certo");
        navigate('/Tipos');
    })
    .catch(() => console.log("Problemas na requisição"));
  

  return (
    <div>
      <main>
        <Header />
        <div className="container">
          <div className="cards">
            <div className="card-post">
              <h1>Cadastro de receitas</h1>
              <hr />
              <form onSubmit={handleSubmit(addPost)} className="form-container">
                <div className="fields">
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    {...register("nome", { required: true })}
                    placeholder="Digite o nome"
                  />
                  {errors.nome && (
                    <p className="error-message">Nome é obrigatório</p>
                  )}

                  <label htmlFor="imagem">Link da imagem</label>
                  <input
                    type="text"
                    id="imagem"
                    {...register("urlImagem", { required: true })}
                    placeholder="Digite o link da imagem"
                  />
                  {errors.imagem && (
                    <p className="error-message">
                      Link da imagem é obrigatoria
                    </p>
                  )}

                  <label htmlFor="tipo">Tipo</label>
                  <input
                    type="text"
                    id="tipo"
                    {...register("tipo", { required: true })}
                    placeholder="Digite o tipo da receita"
                  />
                  {errors.tipo && (
                    <p className="error-message">O tipo é obrigatório</p>
                  )}

                  <label htmlFor="ingredientes">Ingredientes</label>
                  <textarea
                    id="ingredientes"
                    rows="10"
                    cols="30"
                    type="text"
                    {...register("ingredientes", { required: true })}
                    placeholder="Digite os ingredientes"
                  />
                  {errors.ingredientes && (
                    <p className="error-message">
                      Os ingredientes são obrigatórios
                    </p>
                  )}
                  <h5>Obs: Separe os ingredientes por vírgula!</h5>

                  <label htmlFor="preparo">Modo de Preparo</label>
                  <textarea
                    id="preparo"
                    rows="10"
                    cols="30"
                    type="text"
                    {...register("preparo", { required: true })}
                    placeholder="Digite o modo de preparo"
                  />
                  {errors.preparo && (
                    <p className="error-message">
                      Modo de preparo é obrigatório
                    </p>
                  )}

                  <div className="btn-post">
                    <button
                      type="reset"
                      onClick={() => (window.location.href = "/Lista")}
                    >
                      Cancelar
                    </button>
                    <button type="submit">Enviar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Inserir;
