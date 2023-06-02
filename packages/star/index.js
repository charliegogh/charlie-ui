import Star from './src'

Star.install = function(Vue) {
  Vue.component(Star.name, Star)
}
export default Star
