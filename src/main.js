import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './custom.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
