import App from './App'
import store from './store'
// // #ifndef VUE3
// import Vue from 'vue'
// import Vuex from 'vuex';
// import './uni.promisify.adaptor'
// import store from './store'

// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
//   ...App
// })
// app.$mount()
// // #endif

// // #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif