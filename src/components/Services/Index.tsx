import Lampada from '../../assets/lampada.png';


import Topics from './Topics/Index';
import "./index.css"

export default function Services() {
  return (
    <section className="services">
        <h2 className="services__title title">Serviços</h2>
        <div className="services__content">
        <h3 className="services__subtitle subtitle">Conheça alguns dos produtos que nós vendemos</h3>
            <Topics text="Materiais elétricos em Geral" icon="eletric">
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
            </Topics>
            <Topics text="Equipamentos  de combate à incêndio" icon="exguish">
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
                <img src={Lampada} alt="" />
            </Topics>
        </div>
    </section>
  )
}

