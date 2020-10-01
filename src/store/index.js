import { createStore } from "vuex";
import { UserModule } from "./User";
export default createStore({
  state: {
    /*user: null,*/
  },
  //mutations are functions that effect the state. They directly change the state
  mutations: {
    /*SET_USER(state, user) {
      state.user = user;
    },*/
  },
  //Actions are functions that call throughout my app that call mutations
  actions: {
    /*setUser({ commit }, user) {
      commit("SET_USER", user);
    },*/
  },
  modules: {
    User: UserModule,
  },
});
