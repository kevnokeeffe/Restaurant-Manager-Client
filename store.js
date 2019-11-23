import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './src/services/AuthService';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl: 'http://localhost:3000',
    fName: null,
    email: null,
    userId: null
  },
  mutations: {
    authenticate(state){
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn){
        state.fName = auth.getName();
        state.email = auth.getEmail();
        state.userId = auth.getUserId();
      }else{
        state.userId = null;
        state.email = null;
        state.fName = null;
      }
    }
  },
  actions: {
    authenticate(context){
      context.commit('authenticate')
    }
  },
  modules: {
  }
})

export default store
