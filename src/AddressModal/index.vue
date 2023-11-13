<template>
  <component
    :is="component"
    ref="ShippingAddressModal"
    @handleSubmit="handleSubmit"
    @close="handleClose"
  />
</template>
<script>
import loadScript from './loadScript'
export default {
  name: 'AddressModal',
  data() {
    return {
      component: null
    }
  },
  methods: {
    handleSubmit(el) {
      this.$emit('handleSubmit', el)
    },
    handleClose(el) {
      this.$emit('handleClose', el)
    },
    async add() {
      this.$options.components['ShippingAddress'] = await loadScript(
        './ShippingAddress.js',
        'ShippingAddress'
      )
      this.component = 'ShippingAddress'
      this.$nextTick(() => {
        this.$refs.ShippingAddressModal.add({
          orderName: '~~~~'
        })
      })
    }
  }
}
</script>
