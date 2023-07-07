import Header from './Header/Index';
import Card from './Card/Index';

import Foto1 from '../../assets/img/foto1.png';
import Foto2 from '../../assets/img/foto2.png';
import Foto3 from '../../assets/img/foto3.png';

import './Index.css';

export default function Home() {
  return (
    <section className="home" id="home">
        <div className="home__presentation">
            <div className="background"></div>
            <Header/>
            <div className="home__wrapper">
                <h1 className="home__logo">M.M TOKUDA</h1>
                <h2 className="home__subtitle">Materiais Eletricos e Acessórios Gerais e de combate incêndio</h2>
                <div className="home__cards">
                    <Card text="Produtos elétricos">
                        <img src={Foto1} alt=""/>
                    </Card>
                    <Card text="Acessórios">
                        <img src={Foto2} alt=""/>
                    </Card>
                    <Card text="Incêndio">
                        <img src={Foto3} alt=""/>
                    </Card>
                </div>
            </div>
        </div>
        <h2 className="home__informations">
            A nossa empresa fornece para o seu negócio 
            <span className="home__text"> produtos elétricos</span> e 
            <span className="home__text"> acessórios de propósito geral</span> e de 
            <span className="home__text"> combate à incêndio</span>
        </h2>
    </section>
  )
}

