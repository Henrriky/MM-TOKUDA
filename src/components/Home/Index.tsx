import React from 'react'
import Header from './Header/Index';
import Card from './Card/Index';
import Foto1 from '../../assets/foto1.png';

export default function Home() {
  return (
    <section className="home">
        <div className="presentation">
            <Header/>
            <div className="wrapper">
                <h1 className="logoText">M.M TOKUDA</h1>
                <h2>Materiais Eletricos e Acessórios Gerais e de combate incêndio</h2>
                <div className="cards">
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
        <h2>
            A nossa empresa fornece para o seu negócio 
            <span className="homeText">produtos elétricos</span> e 
            <span className="homeText">acessórios de propósito geral</span> e de 
            <span className="homeText">combate à incêndio</span>
        </h2>
    </section>
  )
}

