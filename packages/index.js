import Star from './star'
import Alert from './alert'
const components = [
  Star,
  Alert
]
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (window && window.Vue) {
  install(window.Vue)
}
export {
  install,
  Star,
  Alert
}

