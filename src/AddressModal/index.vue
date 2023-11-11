<template>
  <component
    :is="component"
    ref="ShippingAddressModal"
    @handleSubmit="handleSubmit"
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
    async add(record) {
      await loadScript(
        './ShippingAddress.js',
        'ShippingAddress'
      )
      this.component = 'ShippingAddress'
      this.$nextTick(() => {
        this.$refs.ShippingAddressModal.add(record)
      })
    }
  }
}
</script>
