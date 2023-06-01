import test from './test'
const components = [test]
const install = function(Vue) {
  if (install.installed) return
  components.map((component) => Vue.component(component.name, component))
}
if (window && window.Vue) {
  Vue.use(install)
}
export {
  install,
  test
}

