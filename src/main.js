// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import checkAuth from './middlewares/checkAuth'
// import authInterceptor from './middlewares/AuthInterceptor'
//eslint-disable-next-line
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
require('font-awesome/css/font-awesome.min.css')
Vue.config.productionTip = false

// set vue-resource default options
// Vue.http.interceptors.push(checkAuth);
// Vue.http.interceptors.push(authInterceptor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
