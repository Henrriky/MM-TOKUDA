import Foto5 from "../../assets/foto5.png";
import LocationSVG from "../../assets/footer-icons/location.svg";
import WhatsappSVG from "../../assets/footer-icons/whatsappFooter.svg";
import MailSVG from "../../assets/footer-icons/mail.svg";

import "./index.css"


export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__wrapper wrapper">
        <div className="footer__contact">
          <h3>Entre em contato</h3>
          <a className="footer__social" href="https://api.whatsapp.com/send?phone=551234567890" target="_blank">
            <img src={WhatsappSVG} alt="" className="footer__social__img" />
            (11) 5566-8798
          </a>
          <a className="footer__social" href="mailto:mmtokuda123@gmail.com?subject=Redirecionado do site&body=Dúvida: " target="_blank">
            <img src={MailSVG} alt="" className="footer__social__img" />
            mmtokuda123@gmail.com
          </a>
        </div>
        <div className="footer__location">
          <h3>Localização</h3>
          <div>
            <img src={LocationSVG} alt="" />
            <div className="footer__location__content">
              <h4>Avenida tananam N 5834</h4>
              <p>São Paulo SP 03490-000, Brasil</p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        Todos os direitos reservados MM TOKUDA &copy; 2022
        CNPJ: 00.478.805/0001-45
      </p>
    </footer>
  )
}
