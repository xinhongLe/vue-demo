import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'
Vue.use(ElementUI)
Vue.prototype.$moment = moment

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
