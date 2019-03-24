import Vue from 'vue'
import App from './App.vue'
import './cube-ui'
import './register'
// import axios from 'axios'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
// axios.defaults.withCredentials = true

new Vue({
  render: h => h(App)
}).$mount('#app')
