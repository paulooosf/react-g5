import React from "react";
import Header from "../Header/index.jsx";
import "./style.css";
import vector from "../../assets/Vector.png";
import { useState, useEffect } from "react";

const colors = ["rgba(234, 226, 183, 1)", "rgba(52, 50, 40, 1)"];

function DarkMode() {
    const [position, setPosition] = useState(0)
    const [cor, setCor] = useState(colors[position])

    const click = () => {
        setPosition(position === colors.length - 1 ? 0 : position + 1);
    }

    useEffect(() => {
        setCor(colors[position]);
    }, [position]);

    return (
        <div style={{ backgroundColor: cor }}>
            <Header />
            <main>
                <div className="DarkMode">
                    <div className="buttons">
                        <button className='botao' onClick={click}>
                            <img src={vector} alt="Modo escuro" />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DarkMode;

