import Foto4 from "../../assets/img/foto4.png"
import "./Index.css"

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__wrapper wrapper">
        <h2 className="about__title title">Sobre nós</h2>
        <div className="about__content">
          <div className="about__content__text">
            <h3 className="about__subtitle subtitle">Entenda quem somos e por que existimos</h3>
            <p className="about__description description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <img src={Foto4} alt="" className="about__image" />
        </div>
      </div>
    </section>
  )
}
