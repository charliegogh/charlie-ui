import Vue from 'vue'
import App from './App.vue'
import '../packages/index'
import './core'
new Vue({
  el: '#app',
  render: h => h(App)
})

