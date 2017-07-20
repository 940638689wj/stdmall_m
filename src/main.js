// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

const env = process.env.NODE_ENV
axios.defaults.baseURL = env === 'production' ? 'http://stdmall.dayang1.cn/' : '/api'

// 全局异常过滤
axios.interceptors.response.use(res => {
  return res
}, err => {
  console.log(err)
})

Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
