import Vue from 'vue'
import './plugins/axios'
// import './plugins/vuetify'
import './libs/rem.js';
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import { Lazyload } from 'vant';
import { Toast } from 'vant';
import { Image } from 'vant';


import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Toast);
Vue.use(Image);
Vue.use(Lazyload, {
  loading: 'https://blog-gxsunny-cn.oss-cn-beijing.aliyuncs.com/util/util_bg.png'
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
