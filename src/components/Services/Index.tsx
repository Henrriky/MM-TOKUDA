// ELETRIC
import Canduite from '../../assets/img/services-images/ELETRICO-IMG/img-1.png'
import Perfilado from '../../assets/img/services-images/ELETRICO-IMG/img-2.png'
import Condulete from '../../assets/img/services-images/ELETRICO-IMG/img-3.png'
import CaboFibra from '../../assets/img/services-images/ELETRICO-IMG/img-4.png'
import KitEletrico from '../../assets/img/services-images/ELETRICO-IMG/img-5.png'
import Fios from '../../assets/img/services-images/ELETRICO-IMG/img-6.png'

// HISGUISH
import Tubo from '../../assets/img/services-images/INCENDIO-IMG/img-1.png'
import Conexoes from '../../assets/img/services-images/INCENDIO-IMG/img-2.png'
import Conector from '../../assets/img/services-images/INCENDIO-IMG/img-3.png'
import Kit from '../../assets/img/services-images/INCENDIO-IMG/img-4.png'
import Mangueira from '../../assets/img/services-images/INCENDIO-IMG/img-5.png'
import TuboDeFerro from '../../assets/img/services-images/INCENDIO-IMG/img-6.png'


import Topics from './Topics/Index';
import "./index.css"

export default function Services() {
  const eletricProducts: Array<string> = ["Cabos", "Fios", "Disjuntores", "Canduites", "Lâmpadas", "Interruptores", "Cabo Flexível"];
  const hidraulicProducts: Array<string> = ["Extintores", "Alarmes", "Conexões", "Detector de Fumaça", "Central de alarme", "Chave Storz", "Tubos Galvanizado"];

  return (
    <section className="services" id="services">
        <h2 className="services__title title">Serviços</h2>
        <div className="services__content">
        <h3 className="services__subtitle subtitle">Conheça alguns dos produtos que nós vendemos</h3>
            <Topics text="Materiais elétricos em Geral" icon="eletric" products={eletricProducts}>
                <img src={Canduite} alt="Canduite" />
                <img src={Perfilado} alt="Perfilado Chapa" />
                <img src={Condulete} alt="Condulete" />
                <img src={CaboFibra} alt="Cabo preto de fibra" />
                <img src={KitEletrico} alt="Imagem com lampada, condulete, tomada e fio" />
                <img src={Fios} alt="Fios coloridos" />
            </Topics>
            <Topics text="Equipamentos  de combate à incêndio" icon="exguish" products={hidraulicProducts}>
                <img src={Tubo} alt="Tubo Galvanizado Hidrante" />
                <img src={Conexoes} alt="Conexões para tubos de proteção contra incêndio Conexões ranhuradas de ferro dúctil" />
                <img src={Conector} alt="Conector azul e branco à prova d'agua" />
                <img src={Kit} alt="Imagem com caixa de hidrante, registro globo, adaptador, mangueira, esguicho regulável e chave storz dupla" />
                <img src={Mangueira} alt="Mangueira de incêndio" />
                <img src={TuboDeFerro} alt="Encaixe de tubo de ferro maleável" />
            </Topics>
        </div>
    </section>
  )
}

