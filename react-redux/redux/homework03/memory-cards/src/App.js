import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import { useSelector } from "react-redux";

function App() {
  const cards = useSelector((state) => state.cards.items);

  return (
    <div className="App">
      <Header />
      <div className="gridCardsContainer">
        {cards.map((card, key) => (
          <Card key={key} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
