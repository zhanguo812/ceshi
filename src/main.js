import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
// import VueAxios from 'vue-axios'
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
// Vue.use(VueAxios, axios);
// //配置axios的默认基础请求路径和请求头
Vue.axios.defaults.baseURL = 'http://127.0.0.1:5500/';
Vue.axios.defaults.headers = {
  "content-type": "application/x-www-form-urlencoded"
}
Vue.config.productionTip = false
import Vant from "vant";
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
