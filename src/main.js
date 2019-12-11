import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '../store'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap'
//import * as auth from './services/AuthService';
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import VueTables from 'vue-tables-2';
import VueForm from 'vueform'
Vue.config.productionTip = false;
library.add(faUserSecret)
Vue.use(BootstrapVue);
Vue.config.productionTip = process.env.NODE_ENV ==='production';
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueSweetalert2);

Vue.use(VueTables.ClientTable, {
  compileTemplates: true,
  filterByColumn: true,
});

// Vue.use({
//     created() {
//         document.addEventListener('beforeunload', this.handler)
//     },
//     methods: {
//         handler: function handler() {
//             if (this.auth.isLoggedIn) {
//                 auth.logout();}
//         }
//     }
// })

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
