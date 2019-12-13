import Vue from "vue";
import Vuex from "vuex";
import * as auth from "./src/services/AuthService";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    //apiUrl: 'http://localhost:3000/',
    apiUrl: "https://restaurant-manager-prod-app.herokuapp.com/",
    fName: null,
    email: null,
    userId: null
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.lName = auth.getLastName();
        state.fName = auth.getName();
        state.email = auth.getEmail();
        state.userId = auth.getUserId();
      } else {
        state.userId = null;
        state.email = null;
        state.fName = null;
        state.lName = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit("authenticate");
    }
  }
});

export default store;
