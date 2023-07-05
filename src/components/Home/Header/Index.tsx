import whatsappSvg from "../../../assets/whatsapp.svg";
import './index.css';

export default function Header() {
  return (
    <nav className="navBar">
        <ul className="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#difference">Diferencial</a></li>
            <li><a href="#informations">Disponibilidade</a></li>
            <li><a href="#contact">Contato</a></li>
            <li className="button">
                <a href="home">
                  <img src={whatsappSvg} alt="Logo do Whatsapp"/>
                  Fale com a gente
                </a>
            </li>
        </ul>
    </nav>
  )
}
