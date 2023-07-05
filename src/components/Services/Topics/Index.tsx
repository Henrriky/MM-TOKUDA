import Check from '../../../assets/services-icons/check.svg'
import Eletric from '../../../assets/services-icons/eletric.svg'
import Exguish from '../../../assets/services-icons/exguish.svg'

interface TopicsProps {
    text: string;
    icon: string;
    children: React.ReactNode;
  }
  
export default function Topics({ children, text, icon}: TopicsProps) {
    return (
        <div>
            <div className="services__content__header">
                <img src={icon === "eletric" ? Eletric : Exguish} alt={icon} />
                <h3 className="services__content__header_text">
                    {text}
                </h3>
            </div>
            <ul className="services__content__items">
                <li>
                    <img src={Check} alt="" />
                    <p>Cabos</p>
                </li>
                <li>
                    <img src={Check} alt="" />
                    <p>Cabos</p>
                </li>
                <li>
                    <img src={Check} alt="" />
                    <p>Cabos</p>
                </li>
                <li>
                    <img src={Check} alt="" />
                    <p>Cabos</p>
                </li>
            </ul>
            <div className="services__content__images">
                {children}
            </div>
        </div>
    )
}