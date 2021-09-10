import React from "react";

import styles from "./styles.module.css";

import { useDispatch, useSelector } from "react-redux";
import { openCard, checkCard, closeAgain } from "../../redux/cardsSlice/cardsSlice";

import q_symbol from "../../q-symbol.png";

function Card({ card }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cards.items);

  const handleToggle = (id) => {
    const myitem = items.find((item) => item.id === card.id);
    const length = items.filter((item) => item.isOpen && !item.hidden).length;

    if (myitem.isOpen) {
      return;
    }

    if (length >= 2) {
      return;
    }

    dispatch(openCard(id));

    setTimeout(() => {
      dispatch(checkCard(id));
    }, 500);

    if (length === 1) {
      setTimeout(() => {
        dispatch(closeAgain());
      }, 1000);
    }
  };

  return (
    <label>
      <input type="checkbox" checked={card.isOpen} />
      <div className={`${styles.cardContainer} ${card.hidden ? styles.hidden : ""}`} onClick={() => handleToggle(card.id)}>
        <img className={`${styles.cardImage_front}`} src={q_symbol} alt={card.title} />
        <img className={`${styles.cardImage_back} ${card.hidden && styles.finished}`} src={card.src} alt={card.title} draggable="false" />
      </div>
    </label>
  );
}

export default Card;
