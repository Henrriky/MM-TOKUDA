import { useState } from "react";
import whatsappSvg from "../../../assets/whatsapp.svg";
import Home from "../../../assets/icons/nav-icons/home.svg";
import Contact from "../../../assets/icons/nav-icons/contact.svg";
import Difference from "../../../assets/icons/nav-icons/difference.svg";
import Logo from "../../../assets/icons/nav-icons/logo.svg";
import Services from "../../../assets/icons/nav-icons/services.svg";
import About from "../../../assets/icons/nav-icons/about.svg";
import Clock from "../../../assets/icons/nav-icons/clock.svg";


import './index.css';

export default function Header() {

  const [scrollAfter200, setScrollAfter200] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(false);

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

      {/* MOBILE */}
      <img src={Logo} alt="" className="logo-menu"/>

      <button 
        aria-expanded="false" 
        aria-label="Abrir menu" 
        className={`${menuExpanded ? "button-menu" : "open-menu button-menu"}`}
        onClick={() => { setMenuExpanded(!menuExpanded)}}
        >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20H30" stroke="#3BDBAB" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M10 12H30" stroke="#3BDBAB" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M18 28L30 28" stroke="#3BDBAB" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>

      <button 
        aria-expanded="true" 
        aria-label="Fechar menu" 
        className={`${menuExpanded ? "close-menu button-menu" : "button-menu" }`}
        onClick={() => { setMenuExpanded(!menuExpanded)}}
        >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10L10 30M10 10L30 30" stroke="#3BDBAB" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
      {/* FIM MOBILE */}
      <ul className={`${ menuExpanded ? "links menu-expanded" : "links"}`}>
        <li onClick={() => { setMenuExpanded(!menuExpanded)}}>
          <img className="icon-menu" src={Home} alt="" />
          <a href="#home">Home</a>
        </li>
        <li onClick={() => { setMenuExpanded(!menuExpanded)}}>
          <img className="icon-menu" src={Services} alt="" />
          <a href="#services">Serviços</a>
        </li>
        <li onClick={() => { setMenuExpanded(!menuExpanded)}}>
          <img className="icon-menu" src={About} alt="" />
          <a href="#about">Sobre</a></li>
        <li onClick={() => { setMenuExpanded(!menuExpanded)}}>
          <img className="icon-menu"src={Difference} alt="" />
          <a href="#difference">Diferencial</a></li>
        <li onClick={() => { setMenuExpanded(!menuExpanded)}}>
          <img className="icon-menu clock"src={Clock} alt="" />
          <a href="#informations">Disponibilidade</a></li>
        <li onClick={() => { setMenuExpanded(!menuExpanded)}}>
          <img className="icon-menu"src={Contact} alt="" />
          <a href="#contact">Contato</a></li>
        <li className="button">
          <a href="https://api.whatsapp.com/send?phone=551234567890" target="_blank" className="button2">
            <img src={whatsappSvg} alt="Logo do Whatsapp" />
            Fale com a gente
          </a>
        </li>
      </ul>




    </nav>
  )
}
