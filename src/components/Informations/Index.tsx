import IconHeadset from "../../assets/headset.svg";
import TimeSVG from "../../assets/time.svg";
import PaymentSVG from "../../assets/payment.svg";

export default function Informations() {
  return (
    <section className="informations">
      <div className="difference__wrapper wrapper">
        <h2 className="informations__title title">PAGAMENTO E DISPONIBILIDADE</h2>
        <div className="informations__opening_hour">
          <img src={TimeSVG} alt="Ilustração de uma pessoa em cima de um relógio" />
          <div className="informations__content">
            <h3>Horários de <span>Funcionamento</span></h3>
            <div className="informations__content__wrapper">
              <div className="informations__hour_content">
                <div className="informations__utilDays">
                  <p>Segunda à Sexta</p>
                  <span>Das 8:00 às 20:00</span>
                </div>
                <div className="informations__weekend">
                  <p>Sabado e Domingo</p>
                  <span>Das 8:00 às 18:00</span>
                </div>
              </div>
              <img src={IconHeadset} alt="Icone de um fone" />
            </div>
          </div>
        </div>
        <div className="informations__payment">
          <img src={PaymentSVG} alt="Ilustração de uma pessoa em cima de um relógio" />
          <div className="informations__cards__content">
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
    </section>
  )
}
