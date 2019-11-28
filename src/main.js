import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '../store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.config.productionTip = process.env.NODE_ENV ==='production';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
