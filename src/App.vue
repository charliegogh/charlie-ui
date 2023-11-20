<template>
  <div>
    <AddressModal
      ref="AddressModal"
      @handleSubmit="handleSubmit"
      @handleClose="handleClose"
    />
  </div>
</template>
<script>
import AddressModal from '../packages/ShippingAddress'
export default {
  name: 'App',
  components: {
    AddressModal
  },
  data() {
    return {
      component: null
    }
  },
  mounted() {
    this.$refs.AddressModal.add({
      orderName: '11'
    })
  },
  methods: {
    handleSubmit(el) {
      console.log(el)
    },
    handleClose() {
      console.log('close')
    }
  }
}
</script>
