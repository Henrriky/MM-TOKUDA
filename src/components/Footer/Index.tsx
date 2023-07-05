import Foto5 from "../../assets/foto5.png";
import LocationSVG from "../../assets/footer-icons/location.svg";
import WhatsappSVG from "../../assets/footer-icons/whatsappFooter.svg";
import MailSVG from "../../assets/footer-icons/mail.svg";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="difference__wrapper wrapper">
        <div className="footer__contact">
          <h3>Entre em contato</h3>
          <a className="footer__social" href="#">
            <img src={WhatsappSVG} alt="" className="footer__social__img" />
            (11) 5566-8798
          </a>
          <a className="footer__social" href="#">
            <img src={MailSVG} alt="" className="footer__social__img" />
            mmtokuda123@gmail.com
          </a>
        </div>
        <div className="footer__location">
          <img src={LocationSVG} alt="" />
          <div className="footer__location__content">
            <h3>Localização</h3>
            <h4>Avenida tananam N 5834</h4>
            <p>São Paulo SP 03490-000, Brasil</p>
          </div>
        </div>
        <p>
          Todos os direitos reservados MM TOKUDA &copy; 2022
          CNPJ: 00.478.805/0001-45
        </p>
      </div>
    </footer>
  )
}
