import React from "react";
import Header from "../../Components/Header/index.jsx";
import "./style.css";
import Footer from "../../Components/Footer/index.jsx";
import DarkMode from "../../Components/DarkMode/index.jsx";
import { useState, useEffect } from "react";
import Filipe from "../../assets/Filipe.jpeg";
import Nicolas from "../../assets/Nicolas.jpeg";
import Thiago from "../../assets/Thiago.jpeg";
import Paulo from "../../assets/Paulo.jpeg";
import Matheus from "../../assets/Matheus.jpeg";


const colors = ["rgba(234, 226, 183, 1)", "rgba(52, 50, 40, 1)"];

function Inicio() {
    const [position, setPosition] = useState(0)
    const [cor, setCor] = useState(colors[position])

    const click = () => {
        setPosition(position === colors.length - 1 ? 0 : position + 1);
    }

    useEffect(() => {
        setCor(colors[position]);
    }, [position]);

    useEffect(() => {
        const cards = document.querySelectorAll('.circle-card');

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('is-flipped');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('is-flipped');
            });
        });
    }, []);

    return (
        <div style={{ backgroundColor: cor }}>
            <main>
                <div className="container">
                <div className="mainStyle"> 
                <Header/>
                </div>
                <button className = 'DarkMode' onClick={click}>
                        <DarkMode/>
                    </button> 
                    <div className="conjunto">   
                    <div className="Frase2">
                    <h2>Projetado por Esfomeados, para esfomeados</h2>
                    </div>
                        <div className="Frase1">
                            <h1>GRUPO 5</h1>
                            </div>                         
        <div className="circle-container1">
            <div className="circle-card">
                <div className="front">
                    <img src={Matheus} alt="Imagem 1"/>
                </div>
                <div className="back">
                    <p>Olá! Eu sou o Matheus.</p>
                </div>
            </div>
            <div className="circle-card">
                <div className="front">
                    <img src={Paulo} alt="Imagem 2"/>
                </div>
                <div className="back">
                    <p>Olá me chamo Paulo.</p>
                </div>
            </div>
            <div className="circle-card">
                <div className="front">
                    <img src={Nicolas} alt="Imagem 3"/>
                </div>
                <div className="back">
                    <p>Olá, me chamo Nicolas, sou estudante de programação residente em T.I.C software na Serratec, tenho 17 anos, estou em busca de aperfeiçoamento de técnicas, e tenho vontade de prosseguir na área de frontend.</p>
                </div>
            </div>
        </div>
        <div className="circle-container2">
            <div className="circle-card">
                <div className="front">
                    <img src={Thiago} alt="Imagem 1"/>
                </div>
                <div className="back">
                    <p>Olá, me chamo Thiago.</p>
                </div>
            </div>
            <div className="circle-card">
                <div className="front">
                    <img src={Filipe} alt="Imagem 2"/>
                </div>
                <div className="back">
                    <p>Olá! Me chamo Filipe Lomba.</p>
                </div>
            </div>
            <div className="circle-card">
                <div className="front">
                    <img src={Matheus} alt="Imagem 3"/>
                </div>
                <div className="back">
                    <p>Olá! me chamo Higor.</p>
                </div>
            </div>
            </div>
            </div>
                <Footer />
                </div>
            </main>
        </div>
    );
}


export default Inicio;

