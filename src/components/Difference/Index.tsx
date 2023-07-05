import Foto5 from "../../assets/foto5.png";
import "./index.css"

export default function Difference() {
  return (
    <section className="difference" id="difference">
      <div className="difference__wrapper wrapper">
        <h2 className="difference__title title">Diferencial</h2>
        <div className="difference__content">
          <img src={Foto5} alt="" className="difference__image" />
          <div className="difference__content__text">
            <h3 className="difference__subtitle subtitle">Por qual motivo seu negócio deveria nos contratar?</h3>
            <p className="difference__description description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
