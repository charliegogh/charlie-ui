<template>
  <div>
    <AddressModal ref="AddressModal" />
    <Spin />
  </div>
</template>
<script>
import Spin from '../packages/spin'
import AddressModal from './AddressModal/index.vue'
export default {
  name: 'App',
  components: {
    Spin,
    AddressModal
  },
  data() {
    return {
      component: null
    }
  },
  mounted() {
    this.$refs.AddressModal.add()
  },
  methods: {
  }
}
</script>
