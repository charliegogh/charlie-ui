<template>
  <div>
    <checkbox
      v-model="check"
    />
  </div>
</template>
<script>
import checkbox from '../packages/checkbox/src/checkbox.vue'
export default {
  components: {
    checkbox
  },
  data() {
    return {
      check: true
    }
  },
  mounted() {
  }
}
</script>
