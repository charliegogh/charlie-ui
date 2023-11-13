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
// import AddressModal from './AddressModal/index.vue'
import AddressModal from '../packages/ShippingAddress'
export default {
  name: 'Login',
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
