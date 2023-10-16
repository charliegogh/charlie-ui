<template>
  <label
    class="x-checkbox"
    :class="[
      { 'is-checked': isChecked }
    ]"
  >
    <span
      class="x-checkbox__input"
      :class="{
        'is-checked': isChecked,
      }"
    >
      <span class="x-checkbox__inner" />
      <input
        v-model="model"
        class="x-checkbox__original"
        type="checkbox"
        @change="handleChange"
      >
    </span>
  </label>
</template>
<script>
export default {
  name: 'XCheckbox',
  props: {
    value: {},
    label: {}
  },
  data() {
    return {

    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    isChecked() {
      console.log(this.model)
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      }
    }
  },
  created() {
    // this.checked && this.addToStore()
  },
  methods: {
    handleChange(ev) {
      const value = ev.target.checked
      this.$emit('change', value, ev)
    }
  }
}
</script>
<style lang="less" scoped>
.x-checkbox{
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;

  &__input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  &__inner{
    border: 1px solid #d6d8db;
    border-radius: 2px;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  }
  &__inner:after{
     box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
  }
  &__inner:hover{
    border-color: #154BCC;
  }
  &__original{
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
  .is-checked{
    .x-checkbox__inner{
      background-color: #1A5EFF;
      border-color: transparent;
    }
    .x-checkbox__inner:after{
      transform: rotate(45deg) scaleY(1);
    }
  }
}
</style>
