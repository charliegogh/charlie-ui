import Test from './src'

Test.install = function(Vue) {
  Vue.component(Test.name, Test)
}
export default Test