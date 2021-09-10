import { useEffect } from "react";

import styles from "./styles.module.css";

import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../../redux/cardsSlice/cardsSlice";

function Header() {
  const dispatch = useDispatch();
  const myScore = useSelector((state) => state.cards.myScore);

  useEffect(() => {
    dispatch(playAgain());
  }, [dispatch]);

  return (
    <div className={styles.headerContainer}>
      <h1>Memory Game</h1>
      <div className={styles.headerAltDiv}>
        <p>Score: {myScore}</p>
      </div>
      {myScore !== 0 && <button onClick={() => dispatch(playAgain())}>Play Again</button>}
    </div>
  );
}

export default Header;
