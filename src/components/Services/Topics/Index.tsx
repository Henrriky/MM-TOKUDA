import Check from '../../../assets/icons/services-icons/check.svg'
import Eletric from '../../../assets/icons/services-icons/eletric.svg'
import Exguish from '../../../assets/icons/services-icons/exguish.svg'

interface TopicsProps {
    text: string;
    icon: string;
    children: React.ReactNode;
    products: string[];
  }
  
export default function Topics({ children, text, icon, products}: TopicsProps) {
    return (
        <div>
            <div className="services__content__header">
                <img src={icon === "eletric" ? Eletric : Exguish} alt={icon} />
                <h3 className="services__content__header_text">
                    {text}
                </h3>
            </div>
            <ul className="services__content__items">
                {
                    products.map((product, index) => (
                        <li key={index}>
                            <img src={Check} alt="" />
                            <p>{product}</p>
                        </li>
                    ))
                }
            </ul>
            <div className="services__content__images">
                {children}
            </div>
        </div>
    )
}