<template>
  <div
    v-show="visible"
    class="x-dialog__wrapper"
  >
    <div class="x-dialog">
      <div class="x-dialog__header">
        <div class="x-dialog__title">{{ $attrs.xtitle }}</div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPBAMAAADJ+Ih5AAAAGFBMVEUAAABlZWVmZmZoaGhoaGhlZWVnZ2dmZmbK9mH4AAAAB3RSTlMAYIBAIL+fTMJ37wAAAEVJREFUCNdjwAIcgZjRAUiYKzAwiBsAGUxFDIyFYDl1BXEBMIOprBCqPDwAQjOWFUEY4gLqCmCBQpBGkDkCQI0GCJMxAQDy2gdiQ/3AggAAAABJRU5ErkJggg=="
          @click="handleClose"
        >
      </div>
      <div class="x-dialog__body">
        <slot />
      </div>
      <div
        v-if="$slots.footer"
        class="x-dialog__footer"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modal: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less">

</style>
