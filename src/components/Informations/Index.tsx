import IconHeadset from "../../assets/icons/informations-icons/headset.svg";
import TimeSVG from "../../assets/icons/informations-icons/time.svg";
import PaymentSVG from "../../assets/icons/informations-icons/payment.svg";
import "./index.css"

export default function Informations() {
  return (
    <section className="informations" id="informations">
      <div className="informations__wrapper wrapper">
        <h2 className="informations__title title">Pagamento e disponibilidade</h2>
        <div className="informations__content">
          <div className="informations__opening_hour img">
            <img src={TimeSVG} alt="Ilustração de uma pessoa em cima de um relógio" />
            <div className="informations__content__info card">
              <h3>Horários de <span>Funcionamento</span></h3>
              <div className="informations__content__wrapper">
                <div className="informations__hour_content">
                  <div>
                    <p>Segunda à Sexta</p>
                    <span>Das 8:00 às 20:00</span>
                  </div>
                  <div>
                    <p>Sabado e Domingo</p>
                    <span>Das 8:00 às 18:00</span>
                  </div>
                </div>
                <img src={IconHeadset} alt="Icone de um fone" />
              </div>
            </div>
          </div>
          <div className="informations__payment img">
            <img src={PaymentSVG} alt="Ilustração de uma pessoa em cima de um relógio" />
            <div className="informations__cards__content informations__content__info card">
              <h3>Formas de <span>Pagamento</span></h3>
              <div className="informations__cards__wrapper">
                <span className="informations__payment_card">Cartão</span>
                <span className="informations__payment_card">Cartão</span>
                <span className="informations__payment_card">Cartão</span>
                <span className="informations__payment_card">Cartão</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
