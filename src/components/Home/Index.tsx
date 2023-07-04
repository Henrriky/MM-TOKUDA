import React from 'react'
import Header from './Header/Index';
import Card from './Card/Index';
import Foto1 from '../../assets/foto1.png';
import './Index.css';

export default function Home() {
  return (
    <section className="home">
        <div className="home__presentation">
            <div className="background"></div>
            <Header/>
            <div className="home__wrapper">
                <h1 className="home__logo">M.M TOKUDA</h1>
                <h2 className="home__subtitle">Materiais Eletricos e Acessórios Gerais e de combate incêndio</h2>
                <div className="home__cards">
                    <Card text="Disjuntores e Fios">
                        <img src={Foto1} alt=""/>
                    </Card>
                    <Card text="Ferramentas">
                        <img src={Foto1} alt=""/>
                    </Card>
                    <Card text="Alarmes de incêndio">
                        <img src={Foto1} alt=""/>
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

