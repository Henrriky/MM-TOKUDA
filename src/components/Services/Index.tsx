import React from 'react'
import CardServices from './Card/Index';
import Foto4 from '../../assets/foto4.png';
import "./index.css"

export default function Services() {
  return (
    <section className="services">
        <h2 className="services__title title">Serviços</h2>
        <h3 className="about__subtitle subtitle">Conheça alguns dos produtos que nós vendemos</h3>
        <div className="about__content">
            <CardServices 
                title="PRODUTOS ELÉTRICOS:" 
                text="Navegue pela nossa extensa linha de produtos elétricos, incluindo cabos, fios, dispositivos de automação residencial e soluções de iluminação eficientes.Garantimos qualidade e segurança em todas as suas necessidades elétricas.">
                <img src={Foto4} alt="lampada"/>
            </CardServices>
            <CardServices 
                title="PRODUTOS ELÉTRICOS:" 
                text="Navegue pela nossa extensa linha de produtos elétricos, incluindo cabos, fios, dispositivos de automação residencial e soluções de iluminação eficientes.Garantimos qualidade e segurança em todas as suas necessidades elétricas.">
                <img src={Foto4} alt="lampada"/>
            </CardServices>
            <CardServices 
                title="PRODUTOS ELÉTRICOS:" 
                text="Navegue pela nossa extensa linha de produtos elétricos, incluindo cabos, fios, dispositivos de automação residencial e soluções de iluminação eficientes.Garantimos qualidade e segurança em todas as suas necessidades elétricas.">
                <img src={Foto4} alt="lampada"/>
            </CardServices>
        </div>
    </section>
  )
}