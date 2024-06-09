import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
// import vector from "../assets/Vector.png";
import "./style.css";

export default function Header() {


  return (
    <div className="mainStyle">
      <div className="header">
        <div className="logoStyle">
          <img src={logo} alt="Logo do site" />
        </div>
        <div className="buttons">
          <Link to="/" className="button">
            Início
        </Link>
        <Link to="/lista" className="button">
            Lista
        </Link>
        <Link to="/tipos" className="button">
            Tipos
        </Link>
        <Link to="/inserir" className="button">
            Inserir
        </Link>
        </div>
    </div>
    </div>
);
}







