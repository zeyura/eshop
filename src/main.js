import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './vuex/store'

import currencyFilter from './filters/currency.filter'
import priceFixFilter from './filters/priceFix.filter'
import digitFormatFilter from './filters/digitFormat.filter'

import 'materialize-css/dist/js/materialize.min'
import './assets/styles/styles.scss'

Vue.config.productionTip = false;

Vue.filter('currency', currencyFilter);
Vue.filter('pricefix', priceFixFilter);
Vue.filter('dFormat', digitFormatFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
