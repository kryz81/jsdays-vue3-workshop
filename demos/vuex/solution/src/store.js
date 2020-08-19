import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

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
  plugins: [createPersistedState()],
});

export default store;
