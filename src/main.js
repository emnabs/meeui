import Vue from 'vue'
import App from './App.vue'
import MeeUI from './index'
import './style/index.scss'

Vue.use(MeeUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
