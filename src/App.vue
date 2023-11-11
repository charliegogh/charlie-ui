<template>
  <div>
    <button @click="test">
      123
    </button>
    <!--    <AddressModal-->
    <!--      ref="AddressModal"-->
    <!--      @handleSubmit="handleSubmit"-->
    <!--    />-->
    <shippingAddress
      ref="shippingAddress"
      @handleSubmit="handleSubmit"
    />
  </div>
</template>
<script>
import AddressModal from './AddressModal/index.vue'
import shippingAddress from '../packages/ShippingAddress/index.vue'
export default {
  name: 'Login',
  components: {
    AddressModal,
    shippingAddress
  },
  data() {
    return {
      component: null
    }
  },
  mounted() {

  },
  methods: {
    test() {
      this.$refs.shippingAddress.add({
        name: '123'
      })
    },
    handleSubmit(el) {
      console.log(el)
    }
  }
}
</script>
