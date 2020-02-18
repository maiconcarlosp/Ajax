// ES6 importing libs
import Vue from 'vue'
// import App from './App.vue'
import Painel from './Painel.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Painel),
}).$mount('#app')
