import whatsappSvg from "../../../assets/whatsapp.svg";
import './index.css';

export default function Header() {
  return (
    <nav className="navBar">
        <ul className="links">
            <li><a href="home">Home</a></li>
            <li><a href="home">Sobre nós</a></li>
            <li><a href="home">Serviços</a></li>
            <li><a href="home">Diferencial</a></li>
            <li><a href="home">Contato</a></li>
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
