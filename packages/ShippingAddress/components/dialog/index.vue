<template>
  <div
    v-show="visible"
    class="x-dialog__wrapper"
  >
    <div class="x-dialog">
      <div class="x-dialog__header">
        <div class="x-dialog__title">填写收货地址</div>
        <button
          type="button"
          class="x-dialog__headerbtn"
          aria-label="Close"
          @click="handleClose"
        >
         X
        </button>
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
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      key: 0
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
