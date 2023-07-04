import React from "react";


interface CardServicesProps {
  text: string;
  title: string;
  children: React.ReactNode;
}

export default function CardServices({ children, title, text}: CardServicesProps) {
  return (
    <div className="services__card">
        {children}
        <div className="card__content">
            <h3 className="card__title">{title}</h3>
            <p className="card__text">
                {text}
            </p>
        </div>
    </div>
  )
}