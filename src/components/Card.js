import React from "react";
import "../static/css/card.css";
import image from "../static/images/bullet.png";
const Card = ({ card, status }) => {
  return (
    <div className={`card ${status.toLowerCase()}`}>
      <h3>{card.name}</h3>
      <ul>
        <li>
          <img src={image} alt={""} /> {card.last_updated_at}
        </li>
        <li>
          <img src={image} alt={""} /> {card.location}
        </li>
        <li>
          <img src={image} alt={""} /> {card.gender}
        </li>
      </ul>
    </div>
  );
};

export default Card;
