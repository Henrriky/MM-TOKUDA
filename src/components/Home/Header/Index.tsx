import whatsappSvg from "../../../assets/whatsapp.svg";


export default function Header() {
  return (
    <nav className="navBar">
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="home">Sobre nós</a></li>
            <li><a href="home">Serviços</a></li>
            <li><a href="home">Diferencial</a></li>
            <li><a href="home">Contato</a></li>
            <li>
                <img src={whatsappSvg} alt="Logo do Whatsapp"/>
                <a href="home">Fale com a gente</a>
            </li>
        </ul>
    </nav>
  )
}
