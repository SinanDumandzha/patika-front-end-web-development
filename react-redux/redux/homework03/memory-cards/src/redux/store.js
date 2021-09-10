import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
});
