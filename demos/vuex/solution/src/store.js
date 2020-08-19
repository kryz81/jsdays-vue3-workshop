import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      theme: "light",
    };
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
});

export default store;
