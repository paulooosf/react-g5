import React from 'react'
import '../Footer/style.css'
import fb from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import LinkedIn from '../assets/linkedin.png'
import inst from '../assets/instagram.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="sb-footer-section-padding">
            <div className="sb-footer-links">
                <div className="sb-footer-links-div">
                    <h4>Links úteis</h4>
                    <a href="/">
                        <p>Inicio</p>
                    </a>
                    <a href="/Lista">
                        <p>Lista</p>
                    </a>
                    <a href="/Tipos">
                        <p>Tipos</p>
                    </a>
                    <a href="/Inserir">
                        <p>Inserir</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Em breve</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt=''/></p>
                        <p><img src={twitter} alt=''/></p>
                        <p><img src={LinkedIn} alt=''/></p>
                        <p><img src={inst} alt=''/></p>
                    </div>
                </div>
            </div>
            <hr></hr>
                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>@{new Date().getFullYear()} Tô com fome Todos os direitos reservados</p>
                    </div>
                    <div className="sb-footer-below-links">
                        <a href="/term">
                            <div>
                                <p>Termos e condições</p>
                            </div>
                        </a>
                        <a href="/privacy">
                            <div>
                                <p>Privacidade</p>
                            </div>
                        </a>
                        <a href="/security">
                            <div>
                                <p>Segurança</p>
                            </div>
                        </a>
                        <a href="/cookie">
                            <div>
                                <p>Cookies</p>
                            </div>
                        </a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer