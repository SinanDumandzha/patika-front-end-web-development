import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "react",
        pair: 1,
        src: "/asset/react.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "react",
        pair: 1,
        src: "/asset/react.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "react-router",
        pair: 2,
        src: "/asset/react-router.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "react-router",
        pair: 2,
        src: "/asset/react-router.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "redux",
        pair: 3,
        src: "/asset/redux.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "redux",
        pair: 3,
        src: "/asset/redux.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "html",
        pair: 4,
        src: "/asset/html.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "html",
        pair: 4,
        src: "/asset/html.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "css",
        pair: 5,
        src: "/asset/css.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "css",
        pair: 5,
        src: "/asset/css.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "bootstrap",
        pair: 6,
        src: "/asset/bootstrap.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "bootstrap",
        pair: 6,
        src: "/asset/bootstrap.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "javascript",
        pair: 7,
        src: "/asset/javascript.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "javascript",
        pair: 7,
        src: "/asset/javascript.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "babel",
        pair: 8,
        src: "/asset/babel.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "babel",
        pair: 8,
        src: "/asset/babel.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "npm",
        pair: 9,
        src: "/asset/npm.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "npm",
        pair: 9,
        src: "/asset/npm.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "yarn",
        pair: 10,
        src: "/asset/yarn.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "yarn",
        pair: 10,
        src: "/asset/yarn.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "git",
        pair: 11,
        src: "/asset/git.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "git",
        pair: 11,
        src: "/asset/git.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "github",
        pair: 12,
        src: "/asset/github.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "github",
        pair: 12,
        src: "/asset/github.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "angular",
        pair: 13,
        src: "/asset/angular.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "angular",
        pair: 13,
        src: "/asset/angular.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "vue",
        pair: 14,
        src: "/asset/vue.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "vue",
        pair: 14,
        src: "/asset/vue.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "electron",
        pair: 15,
        src: "/asset/electron.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "electron",
        pair: 15,
        src: "/asset/electron.png",
        isOpen: false,
        hidden: false,
      },
    ],
    myScore: 0,
    myDouble: [],
  },
  reducers: {
    openCard: (state, action) => {
      const myitem = state.items.find((item) => item.id === action.payload);
      myitem.isOpen = true;
    },
    checkCard: (state, action) => {
      const myitem = state.items.find((item) => item.id === action.payload);

      state.myDouble.push({ id: myitem.id, pair: myitem.pair });

      if (state.myDouble.length === 2 && state.myDouble[0].pair === state.myDouble[1].pair) {
        const updatedItems = state.items.map((item) => (item.pair === state.myDouble[0].pair ? { ...item, hidden: true } : item));
        state.items = updatedItems;
        state.myDouble = [];
        state.myScore += 50;
      } else if (state.myDouble.length === 2 && state.myDouble[0].pair !== state.myDouble[1].pair) {
        state.myDouble = [];
        state.myScore -= 10;
      }
    },
    closeAgain: (state) => {
      const newlist = state.items.map((item) => (item.hidden ? item : { ...item, isOpen: false }));
      state.items = newlist;
    },
    playAgain: (state) => {
      const newStartList = state.items.map((item) => item && { ...item, isOpen: false, hidden: false });

      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
      state.items = shuffle(newStartList);

      state.myScore = 0;
      state.myDouble = [];
    },
  },
});

export const { openCard, checkCard, closeAgain, playAgain } = cardsSlice.actions;
export default cardsSlice.reducer;
