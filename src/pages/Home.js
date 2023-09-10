import React, { useEffect, useState } from "react";
import "../static/css/home.css";
import Card from "../components/Card";
import jsonData from "../db/data.json";
const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCards(jsonData.data);
    setLoading(false);
  }, []);

  const groupCards = (cards) => {
    const groupedCards = {
      Applied: [],
      Accepted: [],
      Rejected: [],
    };

    cards.forEach((card) => {
      const status = card.status;
      groupedCards[status].push(card);
    });

    return groupedCards;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const groupedCards = groupCards(cards);

  return (
    <div className="container">
      <div className="con left">
        <h1>Applied</h1>
        {groupedCards.Applied.map((card) => (
          <Card key={card.id} card={card} status={card.status} />
        ))}
      </div>
      <div className="con center">
        <h1>Accepted</h1>
        {groupedCards.Accepted.map((card) => (
          <Card key={card.id} card={card} status={card.status} />
        ))}
      </div>
      <div className="con rightt">
        <h1>Rejected</h1>
        {groupedCards.Rejected.map((card) => (
          <Card key={card.id} card={card} status={card.status} />
        ))}
      </div>
    </div>
  );
};

export default Home;
