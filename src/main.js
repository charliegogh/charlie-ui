import Vue from 'vue'
import App from './App.vue'
import '../packages/index'
import './core'
import '../dist/index.css'
new Vue({
  el: '#app',
  render: h => h(App)
})

