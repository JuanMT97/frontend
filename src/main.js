import Vue from "vue";
import App from "./App.vue";
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment'

Vue.use(VueAxios, axios);

// Importa la configuracion de Auth0
import { domain, clientId } from "../auth_config.json";

// Importa el plugin de Auth0
import { Auth0Plugin } from "./auth";

// Instala el plugin de autenticacion
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");