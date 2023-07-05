import { useState } from "react";
import whatsappSvg from "../../../assets/whatsapp.svg";
import './index.css';

export default function Header() {

  const [scrollAfter200, setScrollAfter200] = useState(false);

  function alterBackgroundNav(): void {
    if (window.scrollY > 200) {
      setScrollAfter200(true);
      return;
    }
    setScrollAfter200(false);
    return;
  }

  window.addEventListener('scroll', alterBackgroundNav);
  
  return (
    <nav className={`${scrollAfter200 ? "navBar scroll" : "navBar"}`}>
        <ul className="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#difference">Diferencial</a></li>
            <li><a href="#informations">Disponibilidade</a></li>
            <li><a href="#contact">Contato</a></li>
            <li className="button">
                <a href="https://api.whatsapp.com/send?phone=551234567890" target="_blank">
                  <img src={whatsappSvg} alt="Logo do Whatsapp"/>
                  Fale com a gente
                </a>
            </li>
        </ul>
    </nav>
  )
}
