import React from "react";


interface CardProps {
  text: string;
  children: React.ReactNode;
}

export default function Card({ children, text}: CardProps) {
  return (
    <div className="card">
      {children}
      <p>{text}</p>
    </div>
  )
}