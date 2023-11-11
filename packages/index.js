// import Star from './star'
// import Alert from './alert'
// import Spin from './spin'
import ShippingAddress from './ShippingAddress/install'

const components = [
  ShippingAddress
  // Star,
  // Alert,
  // Spin
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
  ShippingAddress
  // Alert,
  // Spin
}

