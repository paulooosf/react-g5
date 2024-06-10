import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./style.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect (() => {
    document.body.style.backgroundColor = '#EAE2B7';
  }, []);

  const toggleBackgroundColor = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#EAE2B7' : '#343228';
  }

  return (
    <div className="mainStyle">
      <header className="header">
        <div className="logoStyle">
          <img src={logo} alt="Logotipo do site"/>
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
          <button className="darkMode" onClick={toggleBackgroundColor}><img src="src\assets\Vector.png" alt="Botão do modo noturno"/></button>
        </div>
      </header>
    </div>
);
}







