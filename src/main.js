import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import './libs/rem.js';
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import { Lazyload } from 'vant';
import { Toast } from 'vant';


import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Lazyload);
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
