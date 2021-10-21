import Vue from 'vue'
import App from './App.vue'
import glUI from '../packages'

Vue.use(glUI)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
