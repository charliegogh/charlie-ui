<template>
  <button
    class="x-button"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
